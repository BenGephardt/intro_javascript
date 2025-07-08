let isNegZero = value => (value === 0) && (1 / value === -Infinity);

console.log(isNegZero(-0));