const jwt = require('jsonwebtoken');

const secret = 'secret';

// eslint-disable-next-line complexity, max-lines-per-function
const login = (request, response, _next) => {
  let isAdmin = false;
  try {
    const { username, password } = request.body;
    if (!username
      || !password
      || username.length < 5
      || password.length < 5) return response.status(400).json({ message: 'Informações inválidas' });
    const jwtConfig = {
      expiresIn: '1h',
      algorithm: 'HS256',
    };
    if (username === 'admin' && password === 's3nh4S3gur4???') {
      isAdmin = true;
    }
    const token = jwt.sign({ data: { username, admin: isAdmin || false } }, secret, jwtConfig);
    return response.status(200).json({ token });
  } catch (e) {
    return response.status(500).json({ message: 'deu ruim' });
  }
};

module.exports = login;
