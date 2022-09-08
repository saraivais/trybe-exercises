import React from 'react';

class CardCadastro extends React.Component {
  render() {
    const { nome, idade, email } = this.props;
    return (
      <div>
        <p>Nome: { nome }</p>
        <p>Idade: { idade }</p>
        <p>Email: { email }</p>
      </div>
    )
  }
};

export default CardCadastro;
