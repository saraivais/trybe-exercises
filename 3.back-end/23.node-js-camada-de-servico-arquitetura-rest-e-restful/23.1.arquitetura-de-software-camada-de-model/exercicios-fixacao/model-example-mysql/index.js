const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const port = 3001;

const author = require('./models/author');
const book = require('./models/book');

// transforma o body num json~
app.use(bodyParser.json());

app.get('/authors', async (request, response) => {
  const authors = await author.getAll();
  
  return response.status(200).json(authors);
});

app.get('/authors/:id', async (request, response) => {
  const { id } = request.params;

  const chosenAuthor = await author.findById(id);

  if (!chosenAuthor) return response.status(404).json({ message: 'Not found' });

  return response.status(200).json(chosenAuthor);
});

app.post('/authors', async (request, response) => {
  const { first_name, middle_name, last_name } = request.body;

  if (!author.isValid(first_name, middle_name, last_name)) {
    return response.status(400).json({ message: 'Dados inválidos' });
  }

  await author.create(first_name, middle_name, last_name);

  return response.status(201).json({ message: 'autor criado com sucesso' });
});

app.get('/books', async (request, response) => {
  const { id } = request.query;

  const books = await book.getByAuthorId(id);

  return response.status(200).json(books);
});

app.get('/books/:id', async (request, response) => {
  const { id } = request.params;

  const chosenBook = await book.findById(id);

  return response.status(200).json(chosenBook);
});

app.post('/books', async (request, response) => {
  const { title, author_id } = request.body;

  const isValid = await book.isValid(title, author_id);
  console.log(isValid);
  if (!isValid) {
    return response.status(400).json({ message: 'Dados inválidos' });
  }

  await book.create(title, author_id);

  return response.status(200).json({ message: 'Livro criado com sucesso' });
});

app.listen(port, () => console.log('Online na porta 3001'));
