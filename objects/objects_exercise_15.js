function bar(arg1, arg2) {
  let foo = 'Hello';
  const qux = {
    abc: [1, 2, 3, [4, 5, 6]],
    def: null,
    ghi: NaN,
    jkl: foo,
    mno: arg1,
    pqr: arg2,
  };

  return qux;
}

let result = bar('Victor', 'Antonina');

// variables: bar, foo, quz, arg1, arg2, result

// property names: abc, def, ghi, jkl, mno, pqr, 0, 1, 2, 3

// primitive values: 'hello', 1, 2, 3, 4, 5, 6, null, NaN, abc, def, ghi, jkl, mno, pqr, 'Victor', 'Antonia', '0', '1', '2', '3';

// Objects: bar, [1, 2, 3, [4, 5, 6]], [4, 5, 6], qux