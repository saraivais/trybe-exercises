const sinon = require('sinon');
const { expect } = require('chai');
const connection = require('../../models/connection');
const MoviesModel = require('../../models/movieModel');

describe('Insere um novo filme no BD', () => {
  const payloadMovie = {
    title: 'Example Movie',
    directedBy: 'Jane Dow',
    releaseYear: 1999,
  };

  before(async () => {
    const execute = [{ insertId: 1 }];

    sinon.stub(connection, 'execute').resolves(execute);
  });

  after(async () => {
    connection.execute.restore();
  });

  describe('quando é inserido com sucesso', async () => {

    it('retorna um objeto', async () => {
      const response = await MoviesModel.create(payloadMovie);

      expect(response).to.be.a('object');
    });

    it('tal objeto possui o "id" do novo filme inserido', async () => {
      const response = await MoviesModel.create(payloadMovie);

      expect(response).to.have.a.property('id');
    });

  });
});

// MoviesModel.getById = () => {};

describe('Encontra um filme no DB', () => {

  describe('Quando o id existe', () => {
    const movieIdToSearch = {
      id: 1,
    }
  
    before(async () => {
      const execute = [[{
        insertId: 1,
        title: 'Example Movie',
        directedBy: 'Jane Dow',
        releaseYear: 1999,
      }]];
  
      sinon.stub(connection, 'execute').resolves(execute);
    });

    after(async () => {
      connection.execute.restore();
    });

    it('retorna um objeto', async () => {
      const response = await MoviesModel.getById(movieIdToSearch);

      expect(response).to.be.a('array');
    });

    it('o objeto contém as keys insertId, title, directedBy e releaseYear', async () => {
      const response = await MoviesModel.getById(movieIdToSearch);

      expect(response).to.have.all.keys('insertId', 'title', 'directedBy', 'releaseYear');
    });
  });

  describe('Quando o id não existe', () => {
    it('retorna um ')
  });

});