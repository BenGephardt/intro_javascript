let counter = 0;

while (counter = 1) {
  console.log(counter);
  counter += 1;

  if (counter > 2) {
    break;
  }
} 
// This code causes an infinite loop becasue the assignemnt will alwasy return a truethy value.
// The if statement will never becomes true inside the while loop. 