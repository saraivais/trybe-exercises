const express = require('express');

const userRouter = express.Router();

userRouter.use(express.json());

const users = require('./models/user');

userRouter.post('/', async (request, response) => {
  const { firstName, lastName, email, password } = request.body;
  if (!users.isPasswordValid(password)) {
    return response.status(400).json({ message: '\"password\" length must be at least 6 characters long' });
  }
  await users.create(firstName, lastName, email, password);
  const userAdded = await users.getLastAddedUser();
  return response.status(201).json(userAdded);
});

userRouter.get('/', async (_request, response) => {
  const allUsers = await users.getAll();

  return response.status(200).json(allUsers);
});

userRouter.get('/:id', async (request, response) => {
  const { id } = request.params;

  const userFoundById = await users.getById(id);

  if (!userFoundById) return response.status(404).json({ message: 'User not found' });

  return response.status(200).json(userFoundById);
});

module.exports = userRouter;
