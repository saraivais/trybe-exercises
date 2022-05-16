import { FAZER_LOGIN } from "../actions";

const INITIAL_STATE = {
  email: '',
  password: '',
};

function login(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FAZER_LOGIN:
      return {...state, email: action.payload.email, password: action.payload.password};
    default:
      return state;
  }
}

export default login;
