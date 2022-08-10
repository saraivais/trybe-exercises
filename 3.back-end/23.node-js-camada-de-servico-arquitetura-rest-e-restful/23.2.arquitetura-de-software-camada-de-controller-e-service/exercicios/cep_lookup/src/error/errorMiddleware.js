const errorCodes = require('./errorCodes');

const errorMiddleware = (error, _request, response, _next) => {
  const { name, message } = error;
  console.log('error name', name);
  const [ code, errorMessage ] = message.split('|');
  return response.status(errorCodes[code]).json({ message: errorMessage });
};

module.exports = errorMiddleware;
