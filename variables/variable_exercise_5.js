let foo = 'bar';
{
  let foo = 'qux';
}

console.log(foo); // This will log 'bar' since the outer foo is not affected by the inner block scope