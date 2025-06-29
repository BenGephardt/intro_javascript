let capsLong = str => (str.length > 10) ? str.toUpperCase() : str;

console.log(capsLong("Short str"));
console.log(capsLong("This is a long string"));