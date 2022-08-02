// importar o express
const express = require('express');
const salesRouter = require('./sales');
const signupRouter = require('./signup');
const { errorHandler } = require('./errorMiddleware');

const PORT = 3003;
// instanciar o express
const app = express();

// colocando o router de coisas de sales~
app.use('/signup', signupRouter);
app.use('/sales', salesRouter);

// aqui tem que tacar o treco de erros~
app.use(errorHandler);

// coisar o express numa página/rota~
app.listen(PORT, () => {
  console.log('Estou coisando na porta 3003~');
});