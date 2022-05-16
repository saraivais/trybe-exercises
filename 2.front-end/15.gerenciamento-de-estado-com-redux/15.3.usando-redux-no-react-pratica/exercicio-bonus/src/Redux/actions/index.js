export const FAZER_LOGIN = 'FAZER_LOGIN';

export const loginAction = (email, password) => ({ type: FAZER_LOGIN, payload: { email, password } });

export const FAZER_CADASTRO = 'FAZER_CADASTRO';

export const cadastroAction = (nome, idade, email) => ({ type: FAZER_CADASTRO, payload: { nome, idade, email }});
