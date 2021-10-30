const mongoose = require('mongoose')
const validator =  require('validator')

const Task = mongoose.model('Tasks',{
    description : {
        type : String,
        reqiured : true,
    },
    completed : {
        type: Boolean,
        required : true,
    }
})

module.exports = Task