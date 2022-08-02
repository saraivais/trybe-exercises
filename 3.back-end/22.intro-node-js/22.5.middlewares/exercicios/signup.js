// importar o express
// importar o router do express
// faz as rotas usando router e dps exporta~

const express = require('express');
const signupRouter = express.Router();
const generateToken = require('./generateToken');
// const { validateProductName, validadeInfosObject } = require('./validateMiddleware');
const { validateSignupInfo } = require('./validateSignupMiddleware');

signupRouter.use(express.json());

signupRouter.post('/', validateSignupInfo, (request, response) => {
  const token = generateToken();
  response.status(200).json({ "token": `${token}` });
});

module.exports = signupRouter;