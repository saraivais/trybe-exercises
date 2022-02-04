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

const e1 = 15;
const e2 = 17;
const e3 = 225;

console.log(e1%2 === 0 || e2%2 === 0 || e3%2 === 0);

// Exercício 9

const o1 = 16;
const o2 = 18;
const o3 = 22;

console.log(o1%2 === 1 || o2%2 === 1 || o3%2 === 1);

// Exercício 10

const custo = 100;
const venda = 240;

let lucro = venda - (custo*1.2);

if (custo > 0 || venda > 0) {
    console.log(lucro*1000);
} else {
    console.log('dado inválido, try again');
}

// Exercício 11

// INSS (Instituto Nacional do Seguro Social)
// Salário bruto até R$ 1.556,94: alíquota de 8%
// Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%
// Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%
// Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88
// IR (Imposto de Renda)
// Até R$ 1.903,98: isento de imposto de renda
// De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto
// De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto
// De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto
// Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.


function calculoImpostos (salarioBruto) {
    //INSS
    let imposto1 = 0;

    if (salarioBruto <= 1556.94) {
        imposto1 = salarioBruto * 0.92;        
    } else if (salarioBruto <= 2594.92) {
        imposto1 = salarioBruto * 0.91;
    } else if (salarioBruto <= 5189.82) {
        imposto1 = salarioBruto * .89;
    } else if (salarioBruto > 5189.82) {
        imposto1 = salarioBruto - 570.88;
    }

    //IR
    let imposto2 = 0;

    if (imposto1 < 1903.98) {
        imposto2 = imposto1;
    } else if (imposto1 <= 2826.65) {
        imposto2 = imposto1 - ((imposto1*0.075)-142.80);    
    } else if (imposto1 <= 3751.05) {
        imposto2 = imposto1 - ((imposto1*0.15) - 354.8);
    } else if (imposto1 <= 4664.68) {
        imposto2 = imposto1 - ((imposto1*0.225) - 636.13);
    } else if (imposto1 > 4664.68) {
        imposto2 = imposto1 - ((imposto1*0.275) - 869.36);
    }
 
    return 'Salário líquido: ' + imposto2;
}

