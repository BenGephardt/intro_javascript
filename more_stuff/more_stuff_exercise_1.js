let array1 = [1, 2, 3];
let array2 = array1;
array1[1] = 4;
console.log(array2);

// Prints [1, 4, 3] because arrays are mutable and array2 is a reference to the same array as array1.