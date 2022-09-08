'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('books',
    [
      {
        title: 'Pride and Prejudice',
        author: 'Jane Austen',
        page_quantity: 408,
      },
      {
        title: 'Sense & Sensibility',
        author: 'Jane Austen',
        page_quantity: 352,
      },
      {
        title: 'Mansfield Park',
        author: 'Jane Austen',
        page_quantity: 464,
      },
      {
        title: 'Emma',
        author: 'Jane Austen',
        page_quantity: 544,
      },
      {
        title: 'Northanger Abbey',
        author: 'Jane Austen',
        page_quantity: 288,
      },
    ], {}),

  down: async (queryInterface) => queryInterface.bulkDelete('books', null, {}),
};