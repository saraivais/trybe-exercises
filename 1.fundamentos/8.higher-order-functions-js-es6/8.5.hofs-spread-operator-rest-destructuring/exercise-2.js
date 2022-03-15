// Crie uma função sum que dado um número variável de elementos retorna a soma desses elementos.
// Dica: use parâmetro rest.

const sum = (...arr) => arr.reduce((acc, curr) => acc + curr);


console.log(sum(1, 2, 3, 4, 5));
console.log(sum(10, 10, 10));
console.log(sum(1000, 600, -100));
console.log(sum(1, 4, 5));
console.log(sum(100, 50, 50));