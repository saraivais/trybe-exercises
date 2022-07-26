const readLine = require('readline-sync');
const fatorial = require('./fatorial');

let chosenScript = '';

// const scripts = {
//   1: 'imc',
//   2: 'fatorial',
//   3: 'fibonacci',
//   4: 'sorteio',
//   5: 'velocidade'
// }

chosenScript = readLine.questionInt(`Digite o script que você quer:\n1: imc\n2: fatorial\n3: fibonacci\n4: sorteio\n5: velocidade\n`);

// if (chosenScript !== '') {
//   console.log(`\n------------- ${scripts[chosenScript]} -------------\n`);

//   require(`./${scripts[chosenScript]}.js`);
// }
if (chosenScript === 2) {
  fatorial();
}
