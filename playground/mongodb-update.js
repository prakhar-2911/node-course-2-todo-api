const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
if(err){
    return console.log('Connection Failed');
}

console.log('Connection Succeeded');

// querying or database

// db.collection('Todos').find().toArray().then(
// (docs)=>{
//     console.log('Todos');
//     console.log(JSON.stringify(docs,undefined,2));
// }, 
// (err)=>{
//     console.log('Unable to fetch todos',err);
// });


db.collection('Users').find({name:'Andrew'}).toArray().then(
(docs)=>{
    console.log('Todos');
    console.log(JSON.stringify(docs,undefined,2));
}, 
(err)=>{
    console.log('Unable to fetch todos',err);
});


db.close();
});