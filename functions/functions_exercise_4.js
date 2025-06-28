function scream(words) {
  words = words + '!!!!';
  return;
  console.log(words);
}

scream('Yipeee'); // This would not print anytrhing.
// The function returns before the console.log is executed, so nothing is printed.