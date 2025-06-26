const FOO = 'bar';
{
  const FOO = 'qux';
}

console.log(FOO);

// This wil not produce an error since the outer FOO is not affected by the inner block scope.