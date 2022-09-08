const bookService = require('../services/book');

const bookController = {
  getAll: async (_request, response, _next) => {
    const allBooks = await bookService.getAll();
    return response.status(200).json(allBooks);
  },

  getById: async (request, response, _next) => {
    const { id } = request.params;
    const chosenBook = await bookService.getById(id);
    return response.status(200).json(chosenBook);
  },

  create: async (request, response, _next) => {
    const { title, author, pageQuantity } = request.body;
    console.log('title', title, 'author', author, 'page_qtd', pageQuantity);

    const createdBook = await bookService.create({ title, author, pageQuantity });
    return response.status(201).json({createdBook});
  },

  update: async (request, response, _next) => {
    const { id } = request.params;
    
    const updatedBook = await bookService.update(request.body, id);

    return response.status(201).json({updatedBook});
  },

  delete: async (request, response, _next) => {
    const { id } = request.params;
    const deletedBook = await bookService.delete(id);

    return response.status(204).json({deletedBook});
  },
};

module.exports = bookController;
