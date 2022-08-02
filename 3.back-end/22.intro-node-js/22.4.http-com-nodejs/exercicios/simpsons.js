const express = require('express');
const fs = require('fs/promises');

const app = express();

app.use(express.json());

// dúvida~ socorro deus~ é assim que presta? 5 ou 6? HELP
app.get('/simpsons', async (request, response) => {
  try {
    const simpsonsFile = await fs.readFile('simpsons.json');
    const simpsonArray = await JSON.parse(simpsonsFile);
    response.status(200).json(simpsonArray);
  } catch (error) {
    response.status(500).send('Deu ruim aqui');
  }
});

// exercicio 7
app.get('/simpsons/:id', async (request, response) => {
  const { id } = request.params;
  try {
    const simpsonsFile = await fs.readFile('simpsons.json');
    const simpsonArray = await JSON.parse(simpsonsFile);
    const chosenCharacter = simpsonArray.find((character) => character.id === id);
    if (!chosenCharacter) {
      throw new Error('simpson not found')
    }
    response.status(200).send(chosenCharacter);
  } catch(e) {
    response.status(404).send({ "message": `${e.message}` });
  }
});

// exercicio 8
app.post('/simpsons', async (request, response) => {
  try {
    const { id, name } = request.body;
    const simpsonsFile = await fs.readFile('simpsons.json');
    const simpsonArray = await JSON.parse(simpsonsFile);
    if (simpsonArray.some((character) => character.id === id)) {
      return response.status(409).json({ "message": "id already exists" });
    }
    simpsonArray.push({ id, name });
    await fs.writeFile('simpsons.json', JSON.stringify(simpsonArray));
    return response.status(204).end();
  } catch(error) {
    throw new Error(error.message);
  }
});


app.listen(3002, () => {
  console.log('Estou rodando na porta 3002');
});
