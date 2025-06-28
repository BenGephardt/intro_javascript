function foo(bar, qux) {
  console.log(bar);
  console.log(qux);
}

foo('Hello');
// This will log 'Hello' then 'undefined' to the console since the invocation is missing its second arument.