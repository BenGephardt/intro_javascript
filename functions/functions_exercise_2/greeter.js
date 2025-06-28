function getName(promt) {
  let readlineSync = require('readline-sync');
  let name = readlineSync.question(promt);
  return name;
}

let firstName = getName('What is your first name? ');
let lastName = getName('What is your last name? ');
console.log(`Hello, ${firstName} ${lastName}!`);