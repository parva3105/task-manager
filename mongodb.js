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

    // db.collection('Users').findOne({_id : new ObjectId("61741f6521c029cd95d61583")} ,(error , user) => {
    //     if( error ){
    //         return console.log('Unable to Fetch');
    //     }

    //     console.log(user);
    // })

    // db.collection('Users').find({ age : 20 }).toArray((error , users) => {
    //     if(error){
    //         return console.log('Unable to fetch');
    //     }
    //     console.log(users);
    // })
    // db.collection('Users').find({ age : 20 }).count((error , count) => {
    //     if(error){
    //         return console.log('Unable to fetch');
    //     }
    //     console.log(count);
    // })
    db.collection('Tasks').findOne({_id : new ObjectId("6174210f9264aac27ace0345")}, (error , result) => {
        if(error){
            return console.log('Unable to fetch');
        }
        console.log(result);
    } )
   
})