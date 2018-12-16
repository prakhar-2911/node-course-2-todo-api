var express = require('express');

var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');

var {User} = require('./models/user');

var {Todo} = require('./models/todo');

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
  var todo = new Todo({
    text: req.body.text
  });

  todo.save().then((doc) => {
    res.send(doc);
  },
(e) => {
  res.status(400).send(e);
});

});


app.listen(3000, () => {
  console.log('starting on port 3000');
});
// // var newTodo = new Todo({
// //   text: 'lets cook something'
// // });
// //
// // newTodo.save().then((doc) => {
// //   console.log(doc);
// // },
// // (err) => {
// //   console.log(err);
// // }
// // )
//
// var otherTodo = new Todo({
// text: '  whatsupp   ',
// //completed: true,
// //completedAt: 123
// });
//
// otherTodo.save().then((doc) => {
//   console.log(doc);
// },
// (err) => {
//   console.log('Soemthing bad happened',err);
// });
//
//
//
//
//
//
// var user = new User({
//   email: 'prakharcsharma@gmail.com'
// });
//
//
// user.save().then((doc)=> {
// console.log(doc);
// },
// (e) => {
//   console.log(e);
// })
