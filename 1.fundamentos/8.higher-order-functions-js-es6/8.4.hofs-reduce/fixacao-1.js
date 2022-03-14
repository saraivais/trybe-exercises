// Criar uma função que some todos os números pares do array usando reduce();

const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54]; // resultado esperado: 152
const numbers1 = [2, 2, 5, 2123, 123, 2, 2];

const evenSum = (arr) => {
  const onlyEven = arr.filter((element) => element % 2 === 0);
  return onlyEven.reduce((acc, number) => acc + number);
}

console.log(evenSum(numbers));
console.log(evenSum(numbers1));