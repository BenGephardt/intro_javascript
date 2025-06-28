function foo(bar, qux) {
  console.log(bar);
  console.log(qux);
}

foo(42, 3.1415, 2.718);
// This will lock, 42, 3.1415  and then nothing.
// This is because the function is invoded with three arguments while there are only two parameters.