const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

// Dada uma matriz, transforme-a em um array.

function flatten(matrix) {
  return matrix.reduce((acc, curr) => acc.concat(curr), []);
  // acc [] - curr ['1', '2', '3'];
  // acc ['1', '2', '3'] - curr [true];
  // acc ['1', '2', '3', true] - curr [4, 5, 6];
  // retornar acc ['1', '2', '3', true, 4, 5, 6];
}

console.log(flatten(arrays));