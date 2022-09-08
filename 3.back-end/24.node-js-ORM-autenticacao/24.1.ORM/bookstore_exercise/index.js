const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const bookRoute = require('./routes/book');

app.use(express.json());

app.use('/books', bookRoute);

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}!`));