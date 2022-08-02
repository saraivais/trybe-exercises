const fs = require('fs').promises;

// exercício 4.1
// Crie uma função que leia todos os dados do arquivo e imprima cada personagem no formato id - Nome. Por exemplo: 1 - Homer Simpson.
async function readSimpsons() {
  try {
    const result = await fs.readFile('simpsons.json');
    // console.log('result', result);
    const readableResult = await JSON.parse(result);
    // console.log('readable, please', readableResult);
    readableResult.forEach(({ id, name }) => console.log(`${id} - ${name}`));
  } catch(err) {
    console.log('error message:', err);
  }
}
// readSimpsons();

// exercicio 4.2
// Crie uma função que receba o id de uma personagem como parâmetro e retorne uma Promise que é resolvida com os dados da personagem que possui o id informado. Caso não haja uma personagem com o id informado, rejeite a Promise com o motivo "id não encontrado".
function getCharacterById(charId) {
  const promise = new Promise(async (resolve, reject) => {
    const readFileResult = await fs.readFile('simpsons.json');
    const jsonResult = await JSON.parse(readFileResult);
    // console.log(jsonResult);
    const chosenCharacter = jsonResult.filter(({ id }) => id == charId);
    if (chosenCharacter.length === 0) {
      reject(new Error('id não encontrado'));
    }
    resolve(chosenCharacter);
  });
  return promise;
}

async function main() {
  try {
    const characterInfo = await getCharacterById(1);
    console.log(characterInfo);
  } catch(error) {
    console.log('algo de errado não está certo:', error)
  }
}
// main();

// exercicio 4.2 ~ plot twist
// Crie uma função que receba o id de uma personagem como parâmetro e retorne uma Promise que é resolvida com os dados da personagem que possui o id informado. Caso não haja uma personagem com o id informado, rejeite a Promise com o motivo "id não encontrado".
async function getCharacterByIdTwist(charId) {
    const readFileResult = await fs.readFile('simpsons.json');
    const jsonResult = await JSON.parse(readFileResult);
    const chosenCharacter = jsonResult.filter(({ id }) => id == charId);
    if (chosenCharacter.length === 0) {
      throw new Error('id não encontrado');
    }
    return chosenCharacter;
}

// using async/await
async function mainTwist() {
  console.log(getCharacterByIdTwist(1));
  try {
    const characterInfo = await getCharacterByIdTwist(1);
    console.log(characterInfo);
  } catch(error) {
    console.log('algo de errado não está certo:', error)
  }
}

// using then/catch
function mainTwistTwister() {
  getCharacterByIdTwist(11)
    .then((deuBom) => console.log('deu bom', deuBom))
    .catch((deuRuim) => console.log('deu ruim', deuRuim));
}

// const xablau = mainTwist();
// console.log('xablau', xablau);
// mainTwistTwister();

// exercicio 4.3
// Crie uma função que altere o arquivo simpsons.json retirando os personagens com id 10 e 6.
async function removeCharacters() {
  const readFileResult = await fs.readFile('simpsons.json');
  const jsonResult = await JSON.parse(readFileResult);
  const newData = jsonResult.filter(({ id }) => id != 6 && id != 10);
  if (newData.length === 0) {
    throw new Error('DEU RUIM');
  }
  const newDataJson = await JSON.stringify(newData);
  await fs.writeFile('simpsons.json', newDataJson);
  const newFileResult = await fs.readFile('simpsons.json');
  const newJsonResult = await JSON.parse(newFileResult);
  if (newJsonResult.length === 0) {
    throw new Error('DEU MUITO RUIM');
  }
  return newJsonResult;
}
// removeCharacters();

function mainRemove() {
  removeCharacters()
    .then((result) => console.log(result))
    .catch((err) => console.log(err));
}

// mainRemove();

// exercicio 4.4
// Crie uma função que leia o arquivo simpsons.json e crie um novo arquivo, chamado simpsonFamily.json, contendo as personagens com id de 1 a 4.
async function simpsonsFamily() {
  const readFileResult = await fs.readFile('simpsons.json');
  const jsonResult = await JSON.parse(readFileResult);
  if (jsonResult.length === 0) {
    throw new Error('algo deu ruim na leitura');
  }
  const newData = jsonResult.filter(({ id }) => parseInt(id, 10) < 5);
  const jsonToSave = await JSON.stringify(newData);
  await fs.writeFile('simpsonFamily.json', jsonToSave);
  const readingNewFile = await fs.readFile('simpsonFamily.json');
  const readableNewFile = await JSON.parse(readingNewFile);
  if (readableNewFile.length === 0) {
    throw new Error('algo deu ruim na leitura do treco novo');
  }
  return readableNewFile;
}

function mainCreateFamily() {
  simpsonsFamily()
    .then((result) => console.log(result))
    .catch((error) => console.log(error));
}

// mainCreateFamily();

// 4.5
// Crie uma função que adicione ao arquivo simpsonFamily.json o personagem Nelson Muntz.
async function addNewCharacter() {
  const readFileResult = await fs.readFile('simpsonFamily.json');
  const jsonified = await JSON.parse(readFileResult);
  if (jsonified.length === 0) {
    throw new Error ('deu ruim aqui');
  }
  const readFileResultSimpson = await fs.readFile('simpsons.json');
  const simpsonJson = await JSON.parse(readFileResultSimpson);
  const characterToAdd = simpsonJson.filter(({ name }) => name == 'Nelson Muntz');
  if (characterToAdd.length === 0) {
    throw new Error('algo deu ruim aqui');
  }
  jsonified.push(characterToAdd);
  const toWrite = await JSON.stringify(jsonified);
  await fs.writeFile('simpsonFamily.json', toWrite);
  const newFile = await fs.readFile('simpsonFamily.json');
  const result = await JSON.parse(newFile);
  if (result.length === 0) {
    throw new Error('aaaaaaaa');
  }
  return result;
}

function mainAddChar() {
  addNewCharacter()
    .then((result) => console.log(result))
    .catch((error) => console.log(error));
}

// mainAddChar();

// 4.6
// Crie uma função que substitua o personagem Nelson Muntz pela personagem Maggie Simpson no arquivo simpsonFamily.json.
async function replaceCharacter() {
  const simpsonFamilyReadFile = await fs.readFile('simpsonFamily.json');
  const familyResult = await JSON.parse(simpsonFamilyReadFile);
  if (familyResult.length === 0) {
    console.log('deu ruim na leitura');
  }
  const simpsonReadFile = await fs.readFile('simpsons.json');
  const simpsonsResult = await JSON.parse(simpsonReadFile);
  if (simpsonsResult.length === 0) {
    console.log('deu ruim na leitura 2');
  }
  const characterToWrite = simpsonsResult.find(({ name }) => name === 'Maggie Simpson');
  console.log('character to write onver', characterToWrite);
  familyResult.pop();
  familyResult.push(characterToWrite);
  const newFamilyToWrite = await JSON.stringify(familyResult);
  await fs.writeFile('simpsonFamily.json', newFamilyToWrite);
  const newFamilyFile = await fs.readFile('simpsonFamily.json');
  const newFamilyResult = await JSON.parse(newFamilyFile);
  if (newFamilyResult.length === 0) {
    console.log('meu deus deu erro eu n sei o que escrever');
  } 
  return newFamilyResult;
}

function mainReplace() {
  replaceCharacter()
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
}

mainReplace();