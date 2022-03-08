function techList(techArray, name) {
  let sortedArray = techArray.sort();
  let techObject = [];
  if (techArray.length === 0) {
    return 'Vazio!';
  }
  for (let index = 0; index < sortedArray.length; index += 1) {
    techObject.push({ tech: sortedArray[index], name });
  }
  return techObject;
}

module.exports = techList;