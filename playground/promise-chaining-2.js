require('../src/db/mongoose')
const Task = require('../src/models/task')

const deleteTaskAndCount = async(id) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({ comepleted : true})
    return count
}

deleteTaskAndCount('617d7758a6cec7ceba69ebf5').then((count) => {
    console.log(count);
}).catch((e) =>{
    console.log(e);
})