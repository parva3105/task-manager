const mongoose = require('mongoose')
const validator =  require('validator')

const User = mongoose.model('User',{
    name: {
        type: String,
        required :  true,
        trim : true
    },
    email : {
        type : String,
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
    }
})

module.exports = User