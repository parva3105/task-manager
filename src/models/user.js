const mongoose = require('mongoose')
const validator =  require('validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const Task = require('./task')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required :  true,
        trim : true
    },
    email : {
        type : String,
        unique : true,
        required : true,
        trim: true,
        validate(value) {
            if(!validator.isEmail(value)) {
                throw new Error('Email is Invalid')
            }
        }
    }, 
    password : {
        type: String,
        required: true,
        minLength : 7,
        trim : true,
        validate(value){
            if(value.toLowerCase().includes('password')){
                throw new Error("Password cannot be password!")
            }
        }
    },
    age : {
        type: Number,
        default: 0,
        required : true,
        validate(value) {
            if(value< 0) {
                throw new Error('Age must be postive number')
            }
        }
    },
    tokens : [{
        token : {
            type : String,
            required : true
        }
    }], avatar : {
            type : Buffer
        }
} , {
    timestamps : true
})

userSchema.virtual('tasks' , {
    ref : 'Tasks',
    localField : '_id',
    foreignField : 'owner',
})

userSchema.methods.toJSON = function () {
    const user = this
    const userObject = user.toObject()

    delete userObject.password
    delete userObject.tokens
    delete userObject.avatar

    return userObject
}

userSchema.methods.genrateAuthToken = async function() {
    const user = this
    const token = jwt.sign({ _id: user._id.toString() },process.env.JWT_SECRET)

    user.tokens = user.tokens.concat({token})
    await user.save()

    return token
}

userSchema.statics.findByCredentials = async (email , password) => {
    const user = await User.findOne({ email})
    
    if(!user){
        throw new Error('Unable to login')
    }

    const isMatch = await bcrypt.compare(password , user.password)

    if(!isMatch){
        throw new Error('Unable to login')
    }

    return user
}

//hash the plain text password
userSchema.pre('save', async function (next) {
    const user = this

    if(user.isModified('password')) {
        user.password = await bcrypt.hash(user.password , 8)
    }

    next()
})

//Delete user task when user removed
userSchema.pre('remove' ,async function(next){
    const user = this
    await Task.deleteMany({ owner : user._id })
    next()
})
const User = mongoose.model('User', userSchema)

module.exports = User