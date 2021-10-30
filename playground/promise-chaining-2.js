require('../src/db/mongoose')
const Task = require('../src/models/task')

// 617d7758a6cec7ceba69ebf5

Task.findByIdAndDelete('617d7758a6cec7ceba69ebf5').then((task) =>{
    console.log(task);

    return Task.countDocuments({ completed : false})
}).then((result) => {
    console.log(result);
}).catch((e) => {
    console.log(e);
})