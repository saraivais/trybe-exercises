const connection = require('./connection');

const cepModel = {
  // funciona~ cria, não retorna nada
  create: async ({ cep, logradouro, bairro, localidade, uf }) => {
    await connection.execute(
      'INSERT INTO cep_lookup.ceps (cep, logradouro, bairro, localidade, uf) VALUES (?, ?, ?, ?, ?)',
      [cep, logradouro, bairro, localidade, uf]
    );
  },

  // funciona~ retorna boolean
  exists: async (cep) => {
    const [ chosenCep ] = await connection.execute(
      'SELECT * FROM ceps WHERE cep = ?',
      [cep]
    );
    return chosenCep.length !== 0;
  },
  
  // funciona~ retorna array de objs
  getAll: async () => {
    const [ allCeps ] = await connection.execute(
      'SELECT * FROM ceps'
    );
    return allCeps;
  },

  // funciona~ retorna array com 1 objeto
  getByCep: async (cep) => {
    const [ chosenCep ] = await connection.execute(
      'SELECT * FROM ceps WHERE cep = ?',
      [cep]
    );
    return chosenCep;
  },
}

module.exports = cepModel;
