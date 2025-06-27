let readlineSync = require('readline-sync');
let firstName = readlineSync.question('What is your name? ');
let lastName = readlineSync.question('What is your last name? ');
console.log(`Hello, ${firstName} ${lastName}!`);