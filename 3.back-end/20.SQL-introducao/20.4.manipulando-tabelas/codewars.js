// CodeWars em mentoria das 13h ~

const teste = [ 1, 1, 11, 2, 3 ];

// bug do min valor repetido~
const minValue = Math.min(...teste);
const maxValue = Math.max(...teste);
const sumResult = teste.reduce((acc, curr) => {
  if (curr > minValue && curr < maxValue) {
    return acc + curr;
  }
  return acc;
}, 0);


const sortedArray = [...teste].sort((a, b) => a - b);
// const cutArray = sortedArray.filter((_element, index) => index < sortedArray.length - 1 && index > 0);
sortedArray.pop();
sortedArray.shift();
const sumResult2 = sortedArray.reduce((acc, curr) => acc + curr, 0);


console.log(sumResult2);


console.log(sumResult);