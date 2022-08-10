const express = require('express');
require('express-async-error');
const errorMiddleware = require('./error/errorMiddleware');
const cepRouter = require('./routes/cepRouter');

const PORT = 3000;
const app = express();

app.use(express.json());

app.get('/ping', (_request, response) => {
  return response.status(200).json({ message: 'pong!' });
});

app.use('/cep', cepRouter);

app.use(errorMiddleware);

app.listen(PORT, () => {
  console.log('Estou rodando na porta ', PORT);
})