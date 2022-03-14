const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

// Dada uma matriz, transforme-a em um array.

function flatten(matrix) {
  return matrix.reduce((acc, curr) => acc.concat(curr), []);
}

console.log(flatten(arrays));