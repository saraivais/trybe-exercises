import React from 'react';
import { Link } from 'react-router-dom';
import ErroLogin from '../ErroLogin/ErroLogin';
import { connect } from 'react-redux';
import CardCadastro from '../CardCadastro/CardCadastro';

class ClientesCadastrados extends React.Component {
  render() {
    const { emailLogin, passwordLogin, cadastros } = this.props;
    return (
    <>
      <Link to="/cadastro">Cadastro</Link>
      { emailLogin !== '' && passwordLogin !== '' ? 
      <div>
        Página de clientes cadastrados~
        { cadastros.map(({ nome, idade, email}, index) => <CardCadastro key={ index} nome={ nome } idade={ idade } email={ email } />) }
      </div> : <ErroLogin />
      }
    </>);
  }
};

const mapStateToProps = (state) => ({
  emailLogin: state.login.email,
  passwordLogin: state.login.password,
  cadastros: state.cadastro,
});

export default connect(mapStateToProps)(ClientesCadastrados);
