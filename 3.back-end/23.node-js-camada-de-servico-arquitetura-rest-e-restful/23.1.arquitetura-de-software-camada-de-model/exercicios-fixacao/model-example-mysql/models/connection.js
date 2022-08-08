const mysql = require('mysql2/promise');

// instanciar um objeto connection que é o retorno da função createPool;
// pool de conexões - forma de conseguir reaproveitar conexões do mysql~
// abre a conexão e mantém a conexão ativa para melhorar performance (menos tempo de latência);
const connection = mysql.createPool({
  user: 'root',
  password: '',
  host: 'localhost',
  database: 'model_example'
});

module.exports = connection;

// estabelecido o objeto connection /\