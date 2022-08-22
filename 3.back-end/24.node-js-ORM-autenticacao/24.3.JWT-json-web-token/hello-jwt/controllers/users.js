const jwt = require('jsonwebtoken');

const secret = 'secret';

const getUsers = (request, response, _next) => {
  try {
    const token = request.headers['authorization'];
    const decoded = jwt.verify(token, secret);
    console.log('decoded', decoded);
    return response.status(200).json(decoded.data);
  } catch (e) {
    return response.status(401).json({ message: 'algo deu errado no token' });
  }
};

module.exports = getUsers;
