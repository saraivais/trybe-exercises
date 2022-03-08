// Exercício 1 - Faça um programa que receba uma string em algarismos romanos e retorne o número que a string representa.
const translateObject = {
  'I' : 1,
  'V' : 5,
  'X' : 10,
  'L' : 50,
  'C' : 100,
  'D' : 500,
  'M' : 1000,
};

function RomanToNumber(romanNumber) {
  let normalNumber = [];
  let numberToReturn = 0;
  
  for (letter of romanNumber) {
    for (key in translateObject) {
      if (letter === key) {
        normalNumber.push(translateObject[key]);
      }
    }
  }

  for (let i = normalNumber.length - 1; i >= 0; i -= 1) {
    if (normalNumber[i] > normalNumber[i-1]) {
      normalNumber[i] -= normalNumber[i-1];
      normalNumber.splice(i-1, 1);
      continue;
    }
  }

  for (let i = 0; i < normalNumber.length; i += 1) {
    numberToReturn += parseInt(normalNumber[i], 10);
  }
  return numberToReturn;
}

// Testing
const roman = ['XIII', 'XLVIII', 'CII', 'LXXXVII', 'DXXXIV', 'VIII', 'IV', 'VI'];
const number = [13, 48, 102, 87, 534, 8, 4, 6];

for (let i = 0; i < roman.length; i += 1) {
  if (RomanToNumber(roman[i]) === number[i]) {
    console.log('Deu bom');
  } else {
    console.log('Algo de errado não está certo');
  }
}

// 2 -Crie uma função chamada arrayOfNumbers que receberá a variável vector como parâmetro. Através de um loop for , percorra essa variável, busque os números pares e os adicione a um novo array que deverá ser retornado ao final pela pela função.

function arrayOfNumbers(array) {
  // 

  let newArray = [];

  for (let i = 0; i < array.length; i += 1) {
    for (let j = 0; j < array[i].length; j += 1) {
      if (array[i][j] % 2 === 0) {
        newArray.push(array[i][j]);
      }
    }
  }

  return newArray;
}

let vector = [[1, 2], [3,4,5,6], [7,8,9,10]];

// console.log(arrayOfNumbers(vector));

// 3 - A partir do array de frutas basket , retorne um objeto que contenha o nome da fruta como chave e a quantidade de vezes que ela aparece no array como valor. Por exemplo, o array ['Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva'], deverá retornar { Melancia: 3, Abacate: 1, Uva: 1 } quando passado como argumento para a função.

function fruitsBasket(fruitArray) {
  //primeira ocorrencia ~ criar um coiso no objeto com valor 1 ~ prox +=1;
  const resposta = {};

  for (let i = 0; i < fruitArray.length; i += 1) {
    if (resposta[fruitArray[i]]) {
      resposta[fruitArray[i]] += 1;
    } else {
      resposta[fruitArray[i]] = 1;
    }
  }

  let stringToReturn = 'Sua cesta possui: ';

  for (key in resposta) {
    stringToReturn += `${resposta[key]} ${key}, `;
  }


  return stringToReturn;
}

const basket = [
  'Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva', 'Laranja',
  'Jaca', 'Pera', 'Melancia', 'Uva', 'Laranja', 'Melancia',
  'Banana', 'Uva', 'Pera', 'Abacate', 'Laranja', 'Abacate',
  'Banana', 'Melancia', 'Laranja', 'Laranja', 'Jaca', 'Uva',
  'Banana', 'Uva', 'Laranja', 'Pera', 'Melancia', 'Uva',
  'Jaca', 'Banana', 'Pera', 'Abacate', 'Melancia', 'Melancia',
  'Laranja', 'Pera', 'Banana', 'Jaca', 'Laranja', 'Melancia',
  'Abacate', 'Abacate', 'Pera', 'Melancia', 'Banana', 'Banana',
  'Abacate', 'Uva', 'Laranja', 'Banana', 'Abacate', 'Uva',
  'Uva', 'Abacate', 'Abacate', 'Melancia', 'Uva', 'Jaca',
  'Uva', 'Banana', 'Abacate', 'Banana', 'Uva', 'Banana',
  'Laranja', 'Laranja', 'Jaca', 'Jaca', 'Abacate', 'Jaca',
  'Laranja', 'Melancia', 'Pera', 'Jaca', 'Melancia', 'Uva',
  'Abacate', 'Jaca', 'Jaca', 'Abacate', 'Uva', 'Laranja',
  'Pera', 'Melancia', 'Jaca', 'Pera', 'Laranja', 'Jaca',
  'Pera', 'Melancia', 'Jaca', 'Banana', 'Laranja', 'Jaca',
  'Banana', 'Pera', 'Abacate', 'Uva',
];

// console.log(fruitsBasket(basket));

// Exercício 4 - 4 - Acesse as chaves nome, sobrenome, andar e apartamento do último morador do blocoDois e faça um console.log no seguinte formato: "O morador do bloco 2 de nome Zoey Brooks mora no 1° andar, apartamento 101".

let moradores = {
  blocoUm: [
    {
      nome: 'Luiza',
      sobrenome: 'Guimarães',
      andar: 10,
      apartamento: 1005,
    },
    {
      nome: 'William',
      sobrenome: 'Albuquerque',
      andar: 5,
      apartamento: 502,
    },
  ],
  blocoDois: [
    {
      nome: 'Murilo',
      sobrenome: 'Ferraz',
      andar: 8,
      apartamento: 804,
    },
    {
      nome: 'Zoey',
      sobrenome: 'Brooks',
      andar: 1,
      apartamento: 101,
    },
  ],
};

// console.log(moradores.blocoDois[1].nome);
let teste = `O morador do bloco 2 de nome ${moradores.blocoDois[1].nome} ${moradores.blocoDois[1].sobrenome} mora no ${moradores.blocoDois[1].andar}º andar, apartamento ${moradores.blocoDois[1].apartamento}`;
console.log(teste);

// 5 - Utilize o for para imprimir o nome completo de todos os moradores do bloco 1, acessando suas chaves nome e sobrenome , depois faça o mesmo para os moradores do bloco 2.
// console.log(moradores.blocoDois.length);

for (let i = 0; i < moradores.blocoUm.length; i += 1) {
  console.log(`Morador ${i + 1}: ${moradores.blocoUm[i].nome} ${moradores.blocoUm[i].sobrenome}`);
}
for (let j = 0; j < moradores.blocoDois.length; j += 1) {
  console.log(`Morador ${j + 1}: ${moradores.blocoDois[j].nome} ${moradores.blocoDois[j].sobrenome}`);
}