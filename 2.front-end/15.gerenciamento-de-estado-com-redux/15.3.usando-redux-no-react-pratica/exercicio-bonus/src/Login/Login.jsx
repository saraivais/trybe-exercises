import React from 'react';
import { connect } from 'react-redux';
import { loginAction } from '../Redux/actions/index';

class Login extends React.Component {
  constructor () {
    super();

    this.state = {
      mail: '',
      password: '',
    }
  }

  handleInputChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { mail, password } = this.state;
    const { history, fazerLogin } = this.props;
    return (
      <>
        <div>Login Page!</div>
        <label htmlFor="mail">E-mail:
          <input type="email" onChange={ this.handleInputChange } name="mail" value={ mail }/>
        </label>
        <label htmlFor="password">Senha:
          <input type="password" onChange={ this.handleInputChange } name="password" value={ password }/>
        </label>
        <button type="button" onClick={ () => {
          fazerLogin(mail, password);
          history.push('/clientes-cadastrados');
          } }>Entrar</button>
      </>);
  }
};

const mapDispatchToProps = (dispatch) => ({
  fazerLogin: (email, password) => dispatch(loginAction(email, password)),
})

export default connect(null, mapDispatchToProps)(Login);
