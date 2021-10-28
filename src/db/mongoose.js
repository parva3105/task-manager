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

// const Tasks = mongoose.model('Tasks',{
//     description : {
//         type : String
//     },
//     completed : {
//         type: Boolean
//     }
// })

// const first = new Tasks({
//     description : "Learn Mongoose",
//     completed : false
// })

// first.save().then(() => {
//     console.log(first);
// }).catch((error) => {
//     console.log("Error!! ", error);
// })

const me = new User({
    name : '    Parva Shah ',
    email:'PARVASHAH310501@GMAIL.COM    '
})

me.save().then(() => {
    console.log(me);
}).catch((error) => {
    console.log('Error!!! ' ,error );
})
