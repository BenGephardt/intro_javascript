let things = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];

let findIntegers = array => {
  return array.filter(function(element) {
    return Number.isInteger(element);
  });
}

let integers = findIntegers(things);
console.log(integers);