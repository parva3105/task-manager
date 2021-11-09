const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT || 3000

// app.use((req , res , next) => {
//     if(req.method === 'GET'){
//         res.send('GET requests are disabled!')
//     } else {
//         next()
//     }
// })

// app.use((req , res , next) => {
//     res.status(503).send('Server Under Maintenance !!')
// })

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port ,() => {
    console.log("Server up on Port : ", port);
})

const Task = require('./models/task')
const User = require('./models/user')

// const main = async () => {
//     const task = await Task.findById('618a5cdf4d4f6a2af3fe62ce')
//     await task.populate('owner')
//     console.log(task.owner);

//     const user = await User.findById('618a5ba0a26f2a3bcc8d95b4')
//     await user.populate('tasks')
//     console.log(user.tasks);

// }
// main()c