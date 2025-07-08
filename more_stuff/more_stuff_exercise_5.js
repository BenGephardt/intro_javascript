function doSomething(string) {
  return string.split(' ').reverse().map((value) => value.length);
}

// The function takes in a string as the argument, splits the string where there is a space, reverses it, turns it into a new array that contains the length of the words.