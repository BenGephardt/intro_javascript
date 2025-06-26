// This code will run without errors, but shoult be declared with 'let' since we are planning to reassign it later.
const NAME = 'Victor';
console.log('Good Morning, ' + NAME);
console.log('Good Afternoon, ' + NAME);
console.log('Good Evening, ' + NAME);

// This code will throw a type error since NAME is a constant and cannot be reassigned.
NAME = 'Joe';
console.log('Good Morning, ' + NAME);
console.log('Good Afternoon, ' + NAME);
console.log('Good Evening, ' + NAME);