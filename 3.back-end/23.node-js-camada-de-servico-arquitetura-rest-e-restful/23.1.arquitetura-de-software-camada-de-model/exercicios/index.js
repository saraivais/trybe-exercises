const express = require('express');
const userRouter = require('./userRouter');

const app = express();
app.use(express.json());

app.use('/user', userRouter);

const PORT = 3000;

app.listen(PORT, () => {
  console.log('Estou coisando na porta ', PORT);
});