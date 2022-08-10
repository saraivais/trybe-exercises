const cepServices = require('../services/cepServices');

const cepController = {

  getAll: async (_request, response) => {
    const allCeps = await cepServices.getAll();
    return response.status(200).json(allCeps);
  },

  getByCep: async (request, response) => {
    const chosenCep = await cepServices.getByCep(request.params);
    return response.status(200).json(chosenCep);
  },

  create: async (request, response) => {
    await cepServices.create(request.body);
    return response.status(201).json(request.body);
  },
  
};

module.exports = cepController;
