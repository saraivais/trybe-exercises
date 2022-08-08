const connection = require('./connection');

const isPasswordValid = (password) => {
  if (!password || typeof password !== 'string') return false;
  if (password.length < 6) return false;
  // parar de retornar booleano~ pq a condição já é booleano, animal
  return true;
};

const create = async (firstName, lastName, email, userPassword) => {
  await connection.execute(
    'INSERT INTO model_exercise.users (first_name, last_name, email, user_password) VALUES (?, ?, ?, ?)',
    [firstName, lastName, email, userPassword]
  );
};

const getLastAddedUser = async () => {
  const [ lastUser ] = await connection.execute(
    'SELECT id, first_name, last_name, email FROM users ORDER BY id DESC LIMIT 1'
  );
  console.log(lastUser);

  return lastUser[0];
};

const getAll = async () => {
  const [ allUsers ] = await connection.execute(
    'SELECT id, first_name, last_name, email FROM users' 
  );
  if (allUsers.length === 0) return [];
  return allUsers;
};

const getById = async (id) => {
  const [ foundUser ] = await connection.execute(
    'SELECT id, first_name, last_name FROM users WHERE id = ?',
    [id]
  );
  if (foundUser.length === 0) return null;
  return foundUser;
};

const editUser = async (id, firstName, lastName, email, password) => {
  await connection.execute(
    'UPDATE model_exercise.users SET first_name = ?, last_name = ?, email = ?, user_password = ? WHERE id = ?',
    [firstName, lastName, email, password, id]
  );
}

module.exports = {
  create,
  isPasswordValid,
  getLastAddedUser,
  getAll,
  getById,
};
