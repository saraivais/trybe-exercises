
const teste = [1, 2, 10];

let somatorio = 0;
for (let i = 0; i < teste.length; i += 1) {
  somatorio = somatorio + teste[i];
}
console.log(somatorio);

let maior = 0;
for (let i = 0; i < teste.length; i += 1) {
  if (teste[i] > maior) {
    maior = teste[i];
  }
}
console.log(maior);

// comparação entre valores dentro de um array
console.log(teste.reduce((a, b) => a > b ? a : b));

// somatório~
console.log(teste.reduce(((a, b) => a + b), 2)); // + chique
// 2 + 1 = 3
// 3 + 2 = 5
// 5 + 10 = 15

// array.reduce((acumulador, valorAtual), valorInicial); 