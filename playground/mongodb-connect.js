const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
if(err){
    return console.log('Connection Failed');
}

/*console.log('Connection Succeeded');

db.collection('Todos').insertOne({
    text: 'something to do',
    completed: false
},
(err, result) => {
if(err){
    console.log('Unable to insert TODO', err)
}

console.log(JSON.stringify(result.ops, undefined, 2))
}
);
*/


// db.collection('Users').insertOne({

//     name: 'Prakhar',
//     age: 24,
//     location: 'Bangalore'
// },
// (err, result) => {
//     if(err){
//         return console.log('Unable to insert user', err);
//     }
//     console.log(JSON.stringify(result.ops, undefined, 2));

// }
// );

db.close();

});
