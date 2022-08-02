// só faz a função e xablau
function validateProductName (request, response, next) {
  const { productName } = request.body;
  const error = { status: 400 };
  if (!productName) {
    // return response.status(400).json({ "message": "O campo productName é obrigatório" });
    error.message = 'O campo productName é obrigatório';
    next(error);
  }
  if (productName.length <= 4) {
    // return response.status(400).json({ "message": "O campo productName deve ter pelo menos 4 caracteres" });
    error.message = 'O campo productName deve ter pelo menos 4 caracteres';
    next(error);
  }
  next();
};

function validadeInfosObject (request, response, next) {
  const { infos } = request.body;
  const error = { status: 400 };
  if (!infos || typeof infos !== 'object') {
    error.message = 'O campo infos é obrigatório';
    next(error);
  }
  if (!infos.saleDate) {
    error.message = 'O campo saleDate é obrigatório';
    next(error);
  }
  const dateRegex = /^\d{2}[./-]\d{2}[./-]\d{4}$/
  if (!dateRegex.test(infos.saleDate)) {
    error.message = 'O campo saleData não é uma data válida';
    next(error);
  }
  if (!infos.warrantyPeriod) {
    error.message = 'O campo warrantyPeriod é obrigatório';
    next(error);
  }
  if (Number(infos.warrantyPeriod) > 3 || Number(infos.warrantyPeriod) < 1) {
    error.message = 'O campo warrantyPeriod precisa estar entre 1 e 3';
    next(error);
  }
  next();
}

module.exports = { validateProductName, validadeInfosObject };