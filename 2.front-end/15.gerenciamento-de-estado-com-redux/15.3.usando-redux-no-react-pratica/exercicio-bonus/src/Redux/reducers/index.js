import { combineReducers } from 'redux';
import login from './loginReducer';
import cadastro from './cadastroReducer';

const rootReducer = combineReducers({ login, cadastro });

export default rootReducer;
