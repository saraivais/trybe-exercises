const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  user: 'root',
  password: '',
  host: 'localhost',
  database: 'model_exercise',
});

module.exports = connection;
