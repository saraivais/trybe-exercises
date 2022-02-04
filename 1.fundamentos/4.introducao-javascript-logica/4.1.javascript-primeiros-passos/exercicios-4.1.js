// Exercício 1

const num1 = 10;
const num2 = 7;

console.log('Adição: ' + (num1+num2));
console.log('Subtração: ' + (num1-num2));
console.log('Multiplicação: ' + (num1*num2));
console.log('Divisão: ' + (num1/num2));
console.log('Módulo: ' + (num1%num2));

// Exercício 2

const x = 26;
const y = 22;

if (x > y) {
    console.log('O maior é: ' + x);
} else {
    console.log('O maior é: ' + y);
}

// Exercício 3

const a = 45;
const b = 15;
const c = 46;

if (a > b && a > c) {
    console.log('O maior é: ' + a);
} else if (b > a && b > c) {
    console.log('O maior é: ' + b);
} else {
    console.log('O maior é: ' + c);
}

// Exercício 4

const n = -0.3;

if (n === 0) {
    console.log('Zero');
} else if (n < 0) {
    console.log('Negative');
} else {
    console.log('Positive');
}

// Exercício 5

const a1 = -1;
const a2 = 80;
const a3 = 101;

if (a1 > 0 && a2 > 0 && a3 > 0) {
    console.log((a1 + a2 + a3) === 180);
} else {
    console.log('algum valor inválido');
}

// Exercício 6

let peça = 'cavalo'

//peão, torre, cavalo, bispo, rei, rainha;

if (peça.toLowerCase() === 'peao' || peça.toLowerCase() === 'peão') {
    console.log('Peão - Uma casa, apenas para a frente (duas se na posição original).');
} else if (peça.toLowerCase() === 'torre') {
    console.log('Torre - Horizontal e vertical, quantas casas quiser.');
} else if (peça.toLowerCase() === 'cavalo') {
    console.log('Cavalo - Em L, qualquer direção, pode pular outras peças.');
} else if (peça.toLowerCase() === 'bispo') {
    console.log('Bispo - Diagonal, quantas casas quiser.');
} else if (peça.toLowerCase() === 'rainha') {
    console.log('Rainha - Qualquer direção, quantas casas quiser.');
} else if (peça.toLowerCase() === 'rei') {
    console.log('Rei - Qualquer direção, apenas uma casa');
} else {
    console.log('Entrada inválida, tente outra vez.');
}

// Exercício 7;

//

function transformaNota (num) {
    let notaEmLetra = '';
    if (num < 0 || num > 100) {
        return 'Algo está errado';
    } else if (num >= 90) { 
        notaEmLetra = 'A';
    } else if (num >= 80) {
        notaEmLetra = 'B';
    } else if (num >= 70) {
        notaEmLetra = 'C';
    } else if (num >= 60) {
        notaEmLetra = 'D';
    } else if (num >= 50) {
        notaEmLetra = 'E';
    } else if (num < 50) {
        notaEmLetra = 'F';
    }
    return notaEmLetra;
}

//Tester exercício 7;
let arrayTesters = [100, 72, 28, 87, 65, 91, 80, 90, 50, 101];
let arrayResultadosEsperados = ['A', 'C', 'F', 'B', 'D', 'A', 'B', 'A', 'E', 'Algo está errado'];

for (var i = 0; i < arrayTesters.length; i++) {
    if (transformaNota(arrayTesters[i]) === arrayResultadosEsperados[i]) {
        console.log(arrayTesters[i], transformaNota(arrayTesters[i]), arrayResultadosEsperados[i], '\n');
        console.log('Tudo lindo.');
    } else {
        console.log('Algo de errado não está certo', '\n');
    }
}

// Exercício 8; 

const n1 = 15;
const n2 = 18;
const n3 = 
