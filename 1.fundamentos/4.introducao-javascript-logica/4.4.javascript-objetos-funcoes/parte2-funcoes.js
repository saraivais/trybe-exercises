// Exercício 1 - Criar uma função que receba uma string e retorne true ou false para palíndromo;
// Exercise 1 - Create a function that checks whether a string is or not a palindrome and returns a boolean;

//Transforms strings into arrays;
function stringToArray (myString) {
    let wordToArray = [];
    for (let letter of myString) {
        wordToArray.push(letter);
    }
    return wordToArray;
}

// Testing to check if stringToArray works:
// console.log(stringToArray('banana')); 
// It works!

//Transforms new Array into string;
function arrayToString (myArray) {
    let arrayToWord = '';
    for (let letter of myArray) {
        arrayToWord += letter;
    }
    return arrayToWord;
}
// Testing to check if arrayToString works:
// let teste3 = ['b', 'a', 'n', 'a', 'n', 'a'];
// console.log(arrayToString(teste3));
// It works!

function isPalindrome (word) {
    if (arrayToString(stringToArray(word).reverse()) === word) {
        return true;
    } 
    return false;
}

// Testing function: 
// console.log(isPalindrome('banana'));
// console.log(isPalindrome('morango'));
// console.log(isPalindrome('arara'));
// console.log(isPalindrome('desenvolvimento'));
// It works as expected;

// Exercício 2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor;
// Exercise 2 - Create a function that receives an array of numbers and returns the index of its higher number;

let arrayTest = [2, 3, 6, 7, 10, 1]; 

function indexOfHigherNumber (arrayOfNumbers) {
    
    for (let index = 0; index < arrayOfNumbers.length; index += 1) {
        if (arrayOfNumbers[index] === Math.max(...arrayOfNumbers)) {
            return index;
        }
    }
}

// Testing to check if indexOfHigherNumber works:
// console.log(indexOfHigherNumber(arrayTest));
// It works;

// Exercício 3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor;
// Exercise 3 - Create a function that receives an array of numbers and returns the index of its lower number;

let arrayTest1 = [2, 4, 6, 7, 10, 0, -3]; 

function indexOfLowerNumber (arrayOfNumbers1) {
    
    for (let index = 0; index < arrayOfNumbers1.length; index += 1) {
        if (arrayOfNumbers[index] === Math.min(...arrayOfNumbers1)) {
            return index;
        }
    }
}

// Testing to check if indexOfLowerNumber works:
// console.log(indexOfLowerNumber(arrayTest1));
// It works;

// Exercício 4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
// Exercise 4 - Create a function that receives an array of strings and returns the string with the bigger length.

let arrayTest2 = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

function findBiggerString (arrayOfStrings) {
    //Defines highest length;
    let wordLength = 0;
    for (let word of arrayOfStrings) {
        if (word.length > wordLength) {
            wordLength = word.length;
        }
    }
    // console.log(wordLength);
    //Compares the strings inside the array with the highest length and returns the higher one;
    for (let word of arrayOfStrings) {
        if (word.length === wordLength) {
            return word;
        }
    }
}

// Testing:
// console.log(findBiggerString(arrayTest2));
// It works;

// Exercício 5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete;
// Exercise 5 - Create a function that receives an array of numbers and returns the statistical mode of the array;

let arrayTest3 = [2, 3, 2, 5, 8, 2, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

function statisticalMode (arrayOfNumbers2) {
    //define higher counter
    let higherCount = 0;
    let mode = 0;
    for (let number of arrayOfNumbers2) {
        let counter = 0;
        for (let number1 of arrayOfNumbers2) {
            if (number1 === number) {
                counter +=1;
            }
        }
        if (counter > higherCount) {
            higherCount = counter;
            mode = number;
        }
    }
    return mode;
}

// Testing to check if it works:
// console.log(statisticalMode(arrayTest3));
// It works;

// Exercício 6 - Crie uma função que receba um número natural (número inteiro não negativo) N e retorne o somatório de todos os números de 1 até N.
// Exercise 6 - Create a function that receives a non-negative number and returns its factorial;

function sumCounter (number) {
    let sum = 0;
    if (number > 0) {
        for (let index = 1; index <= number; index += 1) {
            sum += index;
        }
    }
    return sum;
}

// Testing to check if it works:
// console.log(sumCounter(5));
// It works;

// Exercício 7 - Crie uma função que receba uma string word e outra string ending. Verifique se a string ending é o final da string word. Considere que a string ending sempre será menor que a string word.

let word = 'trybe';
let ending = 'be';

function stringEndingMatch (myString, stringEnding) {
    let newString = myString.substring(myString.length - stringEnding.length);
    // console.log(newString);
    if (newString === stringEnding) {
        return true;
    }
    return false;
}

// Testing to check if it works:
// console.log(stringEndingMatch(word, ending));
// It fucking works!!!!!