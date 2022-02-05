// Exercicio 1 - Com base nessas informações, crie um algoritmo que retorne o fatorial de 10.

let num = 10;
let multiplicacao = 1;

for (let i = num; i > 1; i -= 1) {
    multiplicacao *= i; 
    console.log(multiplicacao);
}

console.log(multiplicacao);

// Exercicio 2 - Agora, desenvolva um algoritmo que é capaz de inverter uma palavra. Por exemplo, a palavra "banana" seria invertida para "ananab". Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente.

let palavra = 'banana';
let palavraAoContrario = '';

for (let index = palavra.length-1; index >= 0; index -=1) {
    // console.log(index);
    // console.log(palavra[index]);
    palavraAoContrario += palavra[index];
}

console.log(palavra);
console.log(palavraAoContrario);


// Exercicio 3 - Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. Considere o número de caracteres de cada palavra.

let array = ['java', 'javascript', 'python', 'html', 'css'];

let maior = '';

for (let index = 0; index < array.length; index +=1 ) {
    if (array[index].length > maior.length) {
        maior = array[index];
    }
}

console.log(maior);

let menor = '';


// Exercicio 4 - Um número primo é aquele divisível apenas por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 0 e 50.