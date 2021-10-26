// CRUD Create Read Update Delete

const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient
const ObjectId = mongodb.ObjectId

//Shorthand Expression
// const { MongoClient , ObjectId } =require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'


MongoClient.connect(connectionURL, { useNewUrlParser : true } , (error , client) => {
    if(error) {
        return console.log('Unable to connect to Database !');
    }    

    const db = client.db(databaseName)

    // db.collection('Users').deleteMany({
    //     age : 20
    // }).then((result) =>{
    //     console.log(result);
    // }).catch((error)=>{
    //     console.log(error);
    // })
    db.collection('Tasks').deleteOne({
        description : "Go to Birthday"
    }).then((result) => {
        console.log(result);
    }).catch((error) => {
        console.log(error);
    })
})