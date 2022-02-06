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

function trianguloVazado (num) {
    if (num%2 === 0) {
        num -= 1;
    }
    for (let i = 1; i <= num; i+=1) {
        if (i%2 === 1) {
            if (i < 2) {
            console.log(' '.repeat((num-i)/2) + '*'.repeat(i));
            } else if (i < num) {
                console.log(' '.repeat((num-i)/2) + '*' + ' '.repeat((i-2)) + '*');
            } else if (i === num) {
                console.log('*'.repeat(i));
            }
        }
    }
}

trianguloVazado(10);

// Faça um programa que diz se um número definido numa variável é primo ou não.
// Um número primo é um número que só é divisível por 1 e por ele mesmo, ou seja, a divisão dele com quaisquer outros números dá resto diferente de zero.
// Dica: você vai precisar de fazer um loop que vá de 0 ao número definido; Além disso, vai precisar de fazer uma checagem a cada iteração e armazenar os resultados em algum lugar.

function ehPrimo (numero) { 

    let divisoresCounter = 0;
    
    for (let i = 1; i <= numero; i+=1 ) {
        if (numero%i === 0) {
            divisoresCounter +=1;
        }
    }
    
    if (divisoresCounter > 2) {
        console.log('não é primo');
    } else {
        console.log('é primo');
    }
}

ehPrimo(7);
ehPrimo(17);
ehPrimo(20);
ehPrimo(23);

//