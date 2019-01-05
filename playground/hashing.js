const {SHA256} = require('crypto-js');

var message = 'I am user number 3';
var hash = SHA256(message).toString();

console.log(`message is ${message}`);
console.log(`hashed value : ${hash}`);
