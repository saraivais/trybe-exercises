import React from 'react';
import { Link } from 'react-router-dom';
import ErroLogin from '../ErroLogin/ErroLogin';
import { connect } from 'react-redux';
import { cadastroAction } from '../Redux/actions';

class Cadastro extends React.Component {
  constructor () {
    super();
    this.state = {
      nome: '',
      idade: '',
      mail: '',
    };
  }

  handleInputChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    })
  }

  render() {
    const { email, password, fazerCadastro } = this.props;
    const { nome, idade, mail } = this.state;
    return (
      <>
        <div>Página de Cadastro</div>

        { email !== '' && password !== '' ? (<div>
          <label htmlFor="nome">Nome:
            <input type="text" name="nome" value={ nome } onChange={ this.handleInputChange } />
          </label>
          <label htmlFor="idade">Idade:
            <input type="number" name="idade" value={ idade } onChange={ this.handleInputChange } />
          </label>
          <label htmlFor="mail">Email:
            <input type="email" name="mail" value={ mail } onChange={ this.handleInputChange } />
          </label>
          <button type="button" onClick={ () => fazerCadastro(nome, idade, mail)}>Cadastrar</button>
        </div>) : <ErroLogin /> }
        
        <Link to="/clientes-cadastrados">Clientes Cadastrados</Link>
      </>)
  }
};

const mapStateToProps = (state) => ({
  email: state.login.email,
  password: state.login.password,
});

const mapDispatchToProps = (dispatch) => ({
  fazerCadastro: (nome, idade, email) => dispatch(cadastroAction(nome, idade, email)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cadastro);
