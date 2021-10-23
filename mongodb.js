// CRUD Create Read Update Delete

// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectId = mongodb.ObjectId

const { MongoClient , ObjectId} = require('mongodb') //Shorthand Expression

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

const id = new ObjectId()
console.log(id);
console.log(id.getTimestamp());

MongoClient.connect(connectionURL, { useNewUrlParser : true } , (error , client) => {
    if(error) {
        return console.log('Unable to connect to Database !');
    }    

    // const db = client.db(databaseName)

    //  db.collection('Users').insertOne({
    //      _id : id,
    //      name: 'Parva',
    //      age : 20
    //  } , (error , result) => {
    //      if (error) {
    //          return console.log('Unable to Insert user data');
    //      }
    //      console.log(result.insertedId);
    //  })
    // db.collection('Users').insertMany([
    //     {
    //         name : 'Jen',
    //         age : 21,
    //     } , {
    //         name : 'Gunther',
    //         age : 19
    //     }
    // ] , (error , result) => {
    //     if (error) {
    //         return console.log('Unable to insert documents!');
    //     }
    //     console.log(result.insertedIds);
    // })
    // db.collection('Tasks').insertMany([
    //     {
    //         description : 'Complete the Course',
    //         completed : false 
    //     } , {
    //         description : 'Go to Birthday',
    //         completed : false
    //     }, {
    //         description : 'Pick up uncle',
    //         completed : true 
    //     }
    // ] , (error , result) => {
    //     if (error){
    //         return console.log('Unable to connect to the database');
    //     } 
        
    //     console.log(result.insertedIds);
    // })

})