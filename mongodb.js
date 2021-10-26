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

    const updatePromise = db.collection('Users').updateOne({
        _id  : new ObjectId("6172cfc13bddfa86aa575df8")
    } , {
        $set : {
            name : 'Mike'
        }
    })

    updatePromise.then((result) => {
        console.log(result);
    }).catch((error) => {
        console.log(error);
    })
        
})