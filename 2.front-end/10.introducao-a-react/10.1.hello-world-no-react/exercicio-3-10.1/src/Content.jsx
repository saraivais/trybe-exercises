import React from "react";

const conteudos = [
  {
    conteudo: 'High Order Functions',
    bloco: 8,
    status: 'Aprendido'
  },
  {
    conteudo: 'Composicao de Componentes',
    bloco: 11,
    status: 'Aprendendo',
  },
  {
    conteudo: 'Composicao de Estados',
    bloco: 12,
    status: 'Aprenderei'
  },
  {
    conteudo: 'Redux',
    bloco: 16,
    status: 'Aprenderei'
  },
];

class Content extends React.Component {
  render () {
    return (
      <ol className="content">
        {conteudos.map((bloco) => (
          <li key={bloco.conteudo} className="card">
            <p>O conteúdo é: {bloco.conteudo}</p>
            <p>Status: {bloco.status}</p>
            <p>Bloco: {bloco.bloco}</p>
          </li>
        ))}
      </ol>
    );
  }
}

export default Content;