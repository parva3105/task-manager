require('../src/db/mongoose')
const User = require('../src/models/user')

// 617a8afb70c2906d0e78cf6d

// User.findByIdAndUpdate('617b0900a71041b3bb551c2b' , { age : 1}).then((user) => {
//     console.log(user);

//     return User.countDocuments({age : 1})
// }).then((result) => { 
//     console.log(result);
// }).catch((e) => {
//     console.log(e);
// })

const updateAgeAndCount =  async( id , age) => {
    const user = await User.findByIdAndUpdate( id , { age })
    const count = await User.countDocuments({ age })
    return count
}

updateAgeAndCount('617b0900a71041b3bb551c2b'  , 1).then((count) => {
    console.log(count);
}).catch((e) =>{
    console.log(e);
})