let number = 4936;

let ones = number % 10;
// 6

number = (number - ones) / 10;
// 493

let tens = number % 10;
// 3

number = (number - tens)/ 10;
// 49

let hundreds = number % 10;
// 9

let thousands = (number - hundreds) / 10;
// 4

console.log(`${thousands}${hundreds}${tens}${ones}`);
// 4936
