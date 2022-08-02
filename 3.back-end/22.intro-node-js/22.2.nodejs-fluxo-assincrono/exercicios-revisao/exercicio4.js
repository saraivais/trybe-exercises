/*
* Você pode utilizar then/catch ou async/await para escrever seu código. Procure não utilizar callbacks.
* Crie uma função que leia todos os dados do arquivo e imprima cada personagem no formato id - Nome. Por exemplo: 1 - Homer Simpson.
* Crie uma função que receba o id de uma personagem como parâmetro e retorne uma Promise que é resolvida com os dados da personagem que possui o id informado. Caso não haja uma personagem com o id informado, rejeite a Promise com o motivo "id não encontrado".
* Crie uma função que altere o arquivo simpsons.json retirando os personagens com id 10 e 6.
* Crie uma função que leia o arquivo simpsons.json e crie um novo arquivo, chamado simpsonFamily.json, contendo as personagens com id de 1 a 4.
* Crie uma função que adicione ao arquivo simpsonFamily.json o personagem Nelson Muntz.
* Crie uma função que substitua o personagem Nelson Muntz pela personagem Maggie Simpson no arquivo simpsonFamily.json.
*/

const fs = require('fs').promises;

// 4.1
// Crie uma função que leia todos os dados do arquivo e imprima cada personagem no formato id - Nome. Por exemplo: 1 - Homer Simpson.
async function displayCharacterInfo() {
  const fileReadResult = await fs.readFile('simpsons.json');
  // console.log(fileReadResult);
  const parsedInfo = await JSON.parse(fileReadResult);
  // console.log(parsedInfo);
  parsedInfo.forEach(({ id, name }) => console.log(`${id} - ${name}`));
}
// displayCharacterInfo();

// 4.2
// Crie uma função que receba o id de uma personagem como parâmetro e retorne uma Promise que é resolvida com os dados da personagem que possui o id informado. Caso não haja uma personagem com o id informado, rejeite a Promise com o motivo "id não encontrado".
async function getOneCharacterInfo(charId) {
  try {
    const fileReadResult = await fs.readFile('simpsons.json');
    const parsedInfo = await JSON.parse(fileReadResult);
    const chosenCharacter = parsedInfo.find(({ id }) => id == charId);
    if (!chosenCharacter) {
      throw new Error('id não encontrado');
    }
    console.log(chosenCharacter.name);
  } catch (error) {
    console.error(error);
  }
}
// getOneCharacterInfo(20);

// 4.3
// Crie uma função que altere o arquivo simpsons.json retirando os personagens com id 10 e 6.
async function remove6thAnd10thCharacter() {
  try {
    const fileReadResult = await fs.readFile('simpsons.json');
    const parsedInfo = await JSON.parse(fileReadResult);
    const filteredNewData = parsedInfo.filter(({ id }) => id != 6 && id != 10);
    console.log(filteredNewData);
    const dataToWrite = JSON.stringify(filteredNewData, null, '\t');
    console.log(dataToWrite);
    await fs.writeFile('simpsons.json', dataToWrite);
  } catch (error) {
    console.error(error);
  }
}
// remove6thAnd10thCharacter();

// 4.4
// Crie uma função que leia o arquivo simpsons.json e crie um novo arquivo, chamado simpsonFamily.json, contendo as personagens com id de 1 a 4.
async function createSimpsonFamily() {
  try {
    const allCharacterFileRead = await fs.readFile('simpsons.json');
    const parsedCharsInfo = await JSON.parse(allCharacterFileRead);
    const simpsonFamily = parsedCharsInfo.filter(({ id }) => Number(id) < 5);
    console.log(simpsonFamily);
    const familyInfoToWrite = JSON.stringify(simpsonFamily, null, '\t');
    await fs.writeFile('simpsonFamily.json', familyInfoToWrite);
  } catch (error) {
    console.error(error);
  }
}
createSimpsonFamily();

// 4.5
// Crie uma função que adicione ao arquivo simpsonFamily.json o personagem Nelson Muntz.
async function addNelsonMuntz() {
  try {
    const simpsonFileRead = await fs.readFile('simpsons.json');
    const parsedSimpsons = await JSON.parse(simpsonFileRead);
    const nelsonMuntzObject = parsedSimpsons.find(({ name }) => name === 'Nelson Muntz');
    console.log(nelsonMuntzObject);
    const simpsonFamily = await fs.readFile('simpsonFamily.json');
    const parsedFamily = await JSON.parse(simpsonFamily);
    parsedFamily.push(nelsonMuntzObject);
    const newFamily = JSON.stringify(parsedFamily, null, '\t');
    await fs.writeFile('simpsonFamily.json', newFamily);
  } catch (error) {
    console.error(error);
  }
}
addNelsonMuntz();


// 4.6
// Crie uma função que substitua o personagem Nelson Muntz pela personagem Maggie Simpson no arquivo simpsonFamily.json.

