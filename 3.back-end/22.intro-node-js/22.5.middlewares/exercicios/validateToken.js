function validateToken(request, response, next) {
  const { authorization } = request.headers;
  console.log(authorization);
  const error = { status: 401 };
  if (!authorization || !(authorization.length === 16)) {
    error.message = 'Token inválido!';
    next(error);
  } 
  next();
}

module.exports = { validateToken };