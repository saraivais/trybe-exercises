const express = require('express');
const bookController = require('../controllers/book');

const bookRoute = express.Router();

bookRoute.get('/:id', bookController.getById);
bookRoute.get('/', bookController.getAll);
bookRoute.post('/', bookController.create);
bookRoute.put('/:id', bookController.update);
bookRoute.delete('/:id', bookController.delete);

module.exports = bookRoute;
