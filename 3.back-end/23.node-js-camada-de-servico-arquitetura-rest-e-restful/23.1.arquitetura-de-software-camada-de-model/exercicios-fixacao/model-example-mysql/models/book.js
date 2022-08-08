const connection = require('./connection');

const getByAuthorId = async (id) => {
  const [books] = await connection.execute('SELECT id, title, author_id FROM books');

  return books.filter(({ author_id }) => Number(author_id) === Number(id));
}

const getAll = async () => {
  const books = await connection.execute('SELECT id, title, author_id FROM books');

  return books;
};

const findById = async (bookId) => {
  const [books] = await connection.execute('SELECT id, title, author_id FROM books');

  return books.filter(({ id }) => Number(id) === Number(bookId))[0];
}

const isValid = async (title, authorId) => {
  const [availableAuthors] = await connection.execute('SELECT author_id FROM books');
  console.log(availableAuthors);
  if (!title || typeof title !== 'string') return false;
  if (title.length < 3) return false;
  if (!authorId) return false;
  if (!availableAuthors.some(({ author_id }) => author_id == authorId)) return false;

  return true;
}

const create = async (title, authorId) => {
  connection.execute(
    'INSERT INTO model_example.books (title, author_id) VALUES (?, ?)',
    [title, authorId],
  );
}

module.exports = {
  getAll,
  getByAuthorId,
  findById,
  isValid,
  create,
}