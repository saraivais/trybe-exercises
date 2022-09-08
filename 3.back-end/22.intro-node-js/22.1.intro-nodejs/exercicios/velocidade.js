const readLine = require('readline-sync');

const speedCalculator = (distance, time) => distance/time;

const distance = readLine.questionInt("Type in the race distance in meters: ");
const time = readLine.questionInt("Type in the race time in seconds: ");

console.log("The medium-speed is: ", speedCalculator(distance, time), "m/s");