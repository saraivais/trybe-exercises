// Function from Playground functions~

function stringToArray(myString) {
  let arrayFromString = [];
  for (let letter of myString) {
    arrayFromString.push(letter);
  }
  return arrayFromString;
}

function arrayToString(myArray) {
  let stringFromArray = '';
  for (let letter of myArray) {
    stringFromArray += letter;
  }
  return stringFromArray;
}

function encode(string) {
    let temporaryArray = stringToArray(string);
    for (let index = 0; index < temporaryArray.length; index += 1) {
      if (temporaryArray[index] === 'a') {
        temporaryArray[index] = '1';
      } else if (temporaryArray[index] === 'e') {
        temporaryArray[index] = '2';
      } else if (temporaryArray[index] === 'i') {
        temporaryArray[index] = '3';
      } else if (temporaryArray[index] === 'o') {
        temporaryArray[index] = '4';
      } else if (temporaryArray[index] === 'u') {
        temporaryArray[index] = '5';
      }
    }
    return arrayToString(temporaryArray);
}

function decode(string) {
  let temporaryArray = stringToArray(string);
  for (let index = 0; index < temporaryArray.length; index += 1) {
    if (temporaryArray[index] === '1') {
      temporaryArray[index] = 'a';
    } else if (temporaryArray[index] === '2') {
      temporaryArray[index] = 'e';
    } else if (temporaryArray[index] === '3') {
      temporaryArray[index] = 'i';
    } else if (temporaryArray[index] === '4') {
      temporaryArray[index] = 'o';
    } else if (temporaryArray[index] === '5') {
      temporaryArray[index] = 'u';
    }
  }
  return arrayToString(temporaryArray);
}

module.exports = {
  encode, 
  decode,
  stringToArray,
  arrayToString
}