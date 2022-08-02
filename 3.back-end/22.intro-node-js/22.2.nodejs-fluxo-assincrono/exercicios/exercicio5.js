// Exercício 5.

// Crie uma função que lê e escreve vários arquivos ao mesmo tempo.
// Utilize o Promise.all para manipular vários arquivos ao mesmo tempo.
// Dado o seguinte array de strings: ['Finalmente', 'estou', 'usando', 'Promise.all', '!!!'] Faça com que sua função crie um arquivo contendo cada string, sendo o nome de cada arquivo igual a file<index + 1>.txt. Por exemplo, para a string "Finalmente", o nome do arquivo é file1.txt.
// Programe sua função para que ela faça a leitura de todos os arquivos criados no item anterior, armazene essa informação e escreva em um arquivo chamado fileAll.txt.
const fs = require('fs').promises;

async function writeOneFile(string, index) {
  const stringToWrite = JSON.stringify(string); //which makes no fucking sense but im not in position to question rn
  await fs.writeFile(`file${index}.txt`, stringToWrite);
  const writtenFile = await fs.readFile(`file${index}.txt`);
  const result = await JSON.parse(writtenFile);
  return result;
}

function writeLotsaFiles() {
  const myStrings = ['Finalmente', 'estou', 'usando', 'Promise.all', '!!!'];
  // const allPromises = myStrings.map((string, index) => writeOneFile(string, index));
  Promise.all(myStrings.map((string, index) => writeOneFile(string, index)))
    .then((values) => fs.writeFile('fileAll.txt', values.join(' '))); //tf am i doin
}

writeLotsaFiles();