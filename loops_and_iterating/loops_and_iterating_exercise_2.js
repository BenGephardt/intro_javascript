let factorial = (number) => {
  let result = 1;
  for (let counter = 2; counter <= number; counter++) {
    result *= counter;
  }
  return result;
}

console.log(factorial(1));
console.log(factorial(2));
console.log(factorial(3));
console.log(factorial(4));
console.log(factorial(5));
console.log(factorial(6));
console.log(factorial(7));
console.log(factorial(8));