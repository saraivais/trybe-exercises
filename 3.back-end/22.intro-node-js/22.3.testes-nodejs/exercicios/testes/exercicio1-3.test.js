const { expect } = require('chai');
const { verifyNumber } = require('../exercicio2.js');

// Exercicio 1 - estruture testes para uma função que vai dizer se o número é positivo, negativo ou neutro~
describe('Testa a função verifyNumber', () => {
  describe('Testa se, ao receber tipos diferente de number, a resposta é adequada', () => {
    it('Retorna a string "o valor deve ser um número"', () => {
      expect(verifyNumber('xablau')).to.equals('o valor deve ser um número');
    });
  });
  describe('Testa se, quando o input é 0, a resposta é adequada', () => {
    it('Retorna uma string', () => {
      expect(verifyNumber(0)).to.be.a('string');
    });
    it('Retorna "neutro"', () => {
      expect(verifyNumber(0)).to.equals('neutro');
    });
  });
  describe('Testa se, quando o input é menor que 0, a resposta é adequada', () => {
    it('Retorna "negativo" quando recebe -1', () => {
      expect(verifyNumber(-1)).to.equals('negativo');
    });
    it('Retorna "negativo" quando recebe -11', () => {
      expect(verifyNumber(-11)).to.equals('negativo');
    });
    it('Retorna "negativo" quando recebe -1000', () => {
      expect(verifyNumber(-1000)).to.equals('negativo');
    });
    it('Retorna "negativo" quando recebe -0.5', () => {
      expect(verifyNumber(-0.5)).to.equals('negativo');
    });
    it('Retorna "negativo" quando recebe -79845648979564322', () => {
      expect(verifyNumber(-79845648979564322)).to.equals('negativo');
    });
  });
  describe('Testa se, quando o input é maior que 0, a resposta é adequada', () => {
    it('Retorna "positivo" quando recebe 1', () => {
      expect(verifyNumber(1)).to.equals('positivo');
    });
    it('Retorna "positivo" quando recebe 12', () => {
      expect(verifyNumber(12)).to.equals('positivo');
    });
    it('Retorna "positivo" quando recebe 1000', () => {
      expect(verifyNumber(1000)).to.equals('positivo');
    });
    it('Retorna "positivo" quando recebe 0.5', () => {
      expect(verifyNumber(0.5)).to.equals('positivo');
    });
    it('Retorna "positivo" quando recebe 448976165489753', () => {
      expect(verifyNumber(448976165489753)).to.equals('positivo');
    });
  });
});