require('../src/db/mongoose')
const User = require('../src/models/user')

// 617a8afb70c2906d0e78cf6d

User.findByIdAndUpdate('617b0900a71041b3bb551c2b' , { age : 20}).then((user) => {
    console.log(user);

    return User.countDocuments({age : 1})
}).then((result) => { 
    console.log(result);
}).catch((e) => {
    console.log(e);
})