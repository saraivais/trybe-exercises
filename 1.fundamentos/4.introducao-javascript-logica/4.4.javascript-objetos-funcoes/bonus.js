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
      console.log();
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
