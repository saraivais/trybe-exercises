function validateSignupInfo(request, response, next) {
  const { email, password, firstName, phone } = request.body;
  const error = { status: 401 };
  const emailValidationRegex = /\S+@\S+\.\S+/;
  if (
    !emailValidationRegex.test(email)
    || !password.length || !password
    || !firstName.length || !firstName
    || !phone.length || !phone
    ) {
    error.message = 'missing fields';
    next(error);
  }
  next();
}

module.exports = { validateSignupInfo };