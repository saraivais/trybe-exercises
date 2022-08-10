const Joi = require('joi');
const runSchema = require('./schemaValidation');
const cepModel = require('../models/cepModel');

const cepServices = {

  validateParamCep: runSchema(Joi.object({
    cep: Joi.string().required().regex(/^\d{5}-?\d{3}$/).messages({
      'string.pattern.base': 'invalidData|Cep inválido'
    })
  })),

  validateBodyCreate: runSchema(Joi.object({
    cep: Joi.string().required().regex(/^\d{5}-\d{3}$/).max(9).messages({ 'string.min': 'invalidData|CEP deve ter 8 números',
    'any.required': 'invalidData|CEP deve ser preenchido',
    'any.empty': 'invalidData|CEP deve ser preenchido'
    }),
    logradouro: Joi.string().required().max(50).messages({
      'string.max': 'invalidData|logradouro deve ter no máximo 50 caracteres',
      'any.required': 'invalidData|logradouro deve ser preenchido',
      'any.empty': 'invalidData|logradouro deve ser preenchido'
    }),
    bairro: Joi.string().required().max(20).messages({
      'string.max': 'invalidData|bairro deve ter no máximo 20 caracteres',
      'any.required': 'invalidData|bairro deve ser preenchido',
      'any.empty': 'invalidData|bairro deve ser preenchido'
    }),
    localidade: Joi.string().required().max(20).messages({
      'string.max': 'invalidData|localidade deve ter no máximo 20 caracteres',
      'any.required': 'invalidData|localidade deve ser preenchido',
      'any.empty': 'invalidData|localidade deve ser preenchido'
    }),
    uf: Joi.string().required().min(2).max(2).messages({
      'string.min': 'invalidData|UF deve ter 2 caracteres',
      'string.max': 'invalidData|UF deve ter 2 caracteres',
      'any.required': 'invalidData|UF deve ser preenchido',
      'any.empty': 'invalidData|UF deve ser preenchido'
    }),
  })),

  formatCep: (cep) => {
    if (cep.includes('-')) return cep.split('-').join('');
    return cep;
  },

  exists: async (cep) => {
    const alreadyExists = await cepModel.exists(cep);
    if (alreadyExists) throw new Error('alreadyExists|CEP já existente');
  },

  create: async (requestBody) => {
    const validatedData = await cepServices.validateBodyCreate(requestBody);
    await cepServices.exists(validatedData.cep);
    const dataToInsert = {
      ...validatedData,
      cep: cepServices.formatCep(validatedData.cep),
    }
    await cepModel.create(dataToInsert);
  },

  getAll: async () => {
    const allCeps = await cepModel.getAll();
    return allCeps;
  },

  getByCep: async (cepParams) => {
    const { cep } = await cepServices.validateParamCep(cepParams);
    const formattedCep = cepServices.formatCep(cep);
    const foundCep = await cepModel.getByCep(formattedCep);
    if (foundCep.length === 0) {
      throw new Error('notFound|Cep não encontrado');
    }
    return foundCep[0];
  },

};

module.exports = cepServices;