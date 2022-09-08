const { book } = require('../models');

const bookService = {
  getAll: async () => {
    const allBooks = await book.findAll();
    return allBooks;
  },

  getById: async (id) => {
    const chosenBook = await book.findByPk(id);
    return chosenBook;
  },

  create: async (bookInfo) => {
    const createdBook = await book.create(bookInfo);
    console.log('createdBook', createdBook);

    return createdBook;
  },

  update: async (bookInfo, id) => {
    const updatedBook = await book.update(bookInfo, { where: { id } });
    console.log('updatedBook', updatedBook);
    return updatedBook;
  },

  delete: async (id) => {
    const deletedBook = await book.destroy({ where: { id } });
    console.log('deletedBook', deletedBook);

    return deletedBook;
  },
}

module.exports = bookService;