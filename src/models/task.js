const mongoose = require('mongoose')
const validator =  require('validator')

const userSchema = new mongoose.Schema({ 
    description : {
        type : String,
        reqiured : true,
    },
    completed : {
        type: Boolean,
        required : true,
        default : false,
    },
    owner : {
        type : mongoose.Schema.Types.ObjectId,
        reqiured : true,
        ref : 'User' //To create Relationship between user model and task mode
    }
} , {
    timestamps: true
})
const Task = mongoose.model('Task', userSchema)

module.exports = Task