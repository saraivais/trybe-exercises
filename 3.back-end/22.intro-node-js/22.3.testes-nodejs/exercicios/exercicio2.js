function verifyNumber(number) {
  if (typeof number !== 'number') {
    return 'o valor deve ser um número';
  }
  if (number === 0) {
    return 'neutro';
  }
  return number > 0 ? 'positivo' : 'negativo';
}

module.exports = { verifyNumber };
