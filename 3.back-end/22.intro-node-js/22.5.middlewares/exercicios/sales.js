// importar o express
// importar o router do express
// faz as rotas usando router e dps exporta~

const express = require('express');
const salesRouter = express.Router();
const { validateProductName, validadeInfosObject } = require('./validateSalesMiddleware');
const { validateToken } = require('./validateToken');

salesRouter.use(express.json());

salesRouter.post('/', validateToken, validateProductName, validadeInfosObject, (request, response) => {
  response.status(201).json({ "message": "Venda cadastrada com sucesso" });
});

module.exports = salesRouter;