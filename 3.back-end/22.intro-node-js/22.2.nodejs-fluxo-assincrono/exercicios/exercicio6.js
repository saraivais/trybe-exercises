// Exercício 6

// Para os exercícios abaixo, faremos uso de um módulo chamado readline, principalmente de seu método readline.question(). Ele provê uma interface de leitura de dados inserida no terminal.
// Crie um script que mostre na tela o conteúdo de um arquivo escolhido pela pessoa usuária:
// Pergunte à pessoa usuária qual arquivo ela deseja ler.
// Leia o arquivo indicado.
// Caso o arquivo não exista, exiba na tela "Arquivo inexistente" e encerre a execução do script.
// Caso o arquivo exista, escreva seu conteúdo na tela.

const rl = require('readline-sync');
const fs = require('fs').promises;

async function choseAndReadFile() {
  const chosenFile = await rl.question('Which file would you like to read?\nfile0\nfile1\nfile2\nfile3\nfile4\nfileAll\n');
  let readResult;
  try {
    readResult = await fs.readFile(`${chosenFile}.txt`);
  } catch(err) {
    console.log('NOME DO ERRO:', err.name);
    return new Error('Arquivo não existente~');
  }
  try {
    const jsonResult = await JSON.parse(readResult);
    return jsonResult;
  } catch(err) {
    // console.log(err);
    console.error(err);
  }
}

function main() {
  choseAndReadFile()
    .then((result) => console.log(result))
    .catch((err) => console.log(err));
}

main();

