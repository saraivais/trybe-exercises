// importar o express
const express = require('express');
// const bodyParser = require('body-parser');

// instanciar o express
const app = express();
// coisando o bodyparser~
// possibilita a desestruturação do body e tals~
app.use(express.json());

// exercicio 1
app.get('/ping', (request, response) => {
  response.status(200).json({ "message": "pong" });
});

// exercicio 2
app.post('/hello', (request, response) => {
  // feita com o bodyparser~
  const { name } = request.body;
  response.status(200).json({ "message": `Hello, ${name}!` });
});

// exercicio 3
app.post('/greetings', (request, response) => {
  const { name, age } = request.body;
  if (Number(age) > 17) {
    return response.status(200).json({ "message": `Hello, ${name}!` });
  }
  response.status(401).json({ "message": "Unauthorized" });
});

// exercicio 4
app.put('/users/:name/:age', (request, response) => {
  const { name, age } = request.params;
  response.status(200).json({ "message": `Seu nome é ${name} e você tem ${age} anos de idade` });
});

// coisar o express numa página/rota~
app.listen(3001, () => {
  console.log('Estou rodando na porta 3001');
});