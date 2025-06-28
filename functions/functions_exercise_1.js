let bar = 1;
function foo() {
  let bar = 2;
}

foo();
console.log(bar); // Will log 1 to the console.
// Executing foo does not affect the ouput since the gobal variable remains unchanged due to the inner scope of funcitons.