//Agora vamos trabalhar com algumas formas geométricas! Faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n. Por exemplo:

function imprimirQuadrado (num) {
    for (let i = 1; i <= num; i+=1) {
        console.log('*'.repeat(num));
    }    
}

imprimirQuadrado(10);

//Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo:

function imprimirTriangulo (num) {
    for (let i = 1; i <= num; i+=1) {
        console.log('*'.repeat(i));
    }
}

imprimirTriangulo(5);

//Agora inverta o lado do triângulo;

function trianguloInvertido (num) {
    console.log('n = %d', num);
    for (let i = 1; i <= num; i+=1) {
        console.log(' '.repeat(num-i) + '*'.repeat(i));
    }
}

trianguloInvertido(5);

//Depois, faça uma pirâmide com n asteriscos de base:

function trianguloIsosceles (num) {
    for (let i = 1; i <= num; i+=1) {
        if (i%2 === 1) {
            console.log(' '.repeat((num-i)/2) + '*'.repeat(i));
        }
    }
}

trianguloIsosceles(10);

//Faça uma pirâmide com n asteriscos de base que seja vazia no meio. Assuma que o valor de n será sempre ímpar:

