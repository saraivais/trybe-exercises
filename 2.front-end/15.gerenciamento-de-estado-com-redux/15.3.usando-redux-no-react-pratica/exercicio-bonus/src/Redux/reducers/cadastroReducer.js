import { FAZER_CADASTRO } from "../actions";

const INITIAL_STATE = [];

function cadastro (state = INITIAL_STATE, action) {
  switch (action.type) {
    case FAZER_CADASTRO:
      return [...state, { nome: action.payload.nome, idade: action.payload.idade, email: action.payload.email}];
    default:
      return [...state];
  }
};

export default cadastro;