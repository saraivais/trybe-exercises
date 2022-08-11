const express = require('express');
const cepController = require('../controllers/cepController');

const cepRouter = express.Router();

cepRouter.get('/', cepController.getAll);
cepRouter.get('/:cep', cepController.getByCep);
cepRouter.post('/', cepController.create);

module.exports = cepRouter;