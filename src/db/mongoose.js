const mongoose = require('mongoose')
const validator =  require('validator')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api' ,{
    useNewUrlParser: true,
})
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
            if(value.toLoweCase().includes('password')){
                throw new Error("Password cannot be password!")
            }
        }
    },
    age : {
        type: Number,
        default: 0,
        validate(value) {
            if(value< 0) {
                throw new Error('Age must be postive number')
            }
        }
    }
})

const me = new User({
    name : '    Parva Shah ',
    email:'PARVASHAH310501@GMAIL.COM    ',
    password : 'OkT'
})

me.save().then(() => {
    console.log(me);
}).catch((error) => {
    console.log('Error!!! ' ,error );
})
