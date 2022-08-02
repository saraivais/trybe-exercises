function errorHandler(error, request, response, next) {
  // console.log(error);
  if (error.status) {
    return response.status(error.status).send(error.message);
  }
  return response.status(500).send('erro genérico');
}

module.exports = { errorHandler };