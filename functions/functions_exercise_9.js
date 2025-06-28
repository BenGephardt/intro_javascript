function multiply(left, right) { // multipy, left, right
  let product = left * right; // left, right, product
  return product; // product
}

function getNumber(prompt) {  // getNumber, prompt
  return parseFloat(question(prompt)); // prompt, question, parseFloat
}

let left = getNumber('Enter the first number: '); // left, getNumber
let right = getNumber('Enter the second number: '); // right, getNumber
console.log(`${left} * ${right} = ${multiply(left, right)}`); // left, right, multiply, console, console.log