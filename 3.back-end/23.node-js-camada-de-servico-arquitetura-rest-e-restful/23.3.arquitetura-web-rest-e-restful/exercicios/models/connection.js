const mysql = require('mysql2/promise');
require('dotenv').config();

const connection = mysql.createPool({
  host: 'localhost', // Se necessário, substitua pelo seu host, `localhost` é o comum
  user: process.env.MYSQL_USER, // Se necessário, substitua pelo seu usuário para conectar ao banco na sua máquina
  password: process.env.MYSQL_PASSWORD, // Se necessário, substitua pela sua senha para conectar ao banco na sua máquina
  database: 'rest_exercicios'});

module.exports = connection;