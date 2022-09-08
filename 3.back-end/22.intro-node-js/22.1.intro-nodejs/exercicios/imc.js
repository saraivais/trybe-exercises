const readLine = require('readline-sync');

const BMICalculator = (weight, height) => weight / height ** 2;

const weight = readLine.questionFloat('Type the weight in kg: ');
const height = readLine.questionFloat('Type the height in meters: ');

function showBMIResult(BMIResult) {
  switch (true) {
    case (BMIResult < 18.5):
      console.log('Underweight');
      break;
    case (BMIResult < 24.9):
      console.log('Normal weight');
      break;
    case (BMIResult < 29.9):
      console.log('Overweight');
      break;
    case (BMIResult < 34.9):
      console.log('Obesity I');
      break;
    case (BMIResult < 39.9):
      console.log('Obesity II');
      break;
    case (BMIResult > 40):
      console.log('Obesity III & IV');  
    default:
      break;
  }
}

const calculatorResult = BMICalculator(weight, height);

console.log('The BMI is: ', calculatorResult);
showBMIResult(calculatorResult);

// module.exports = IMCCalculator;
