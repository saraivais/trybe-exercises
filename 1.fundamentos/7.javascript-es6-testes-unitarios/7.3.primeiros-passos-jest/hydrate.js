function hydrate(string) {
  let numberArray = string.match(/[0-9]/g);
  let total = 0;

  for (let number of numberArray) {
    total += parseInt(number, 10);
  }

  if (total === 1) {
    return `${parseInt(total, 10)} copo de água`;
  }
  
  return `${parseInt(total, 10)} copos de água`;
}

module.exports = hydrate;