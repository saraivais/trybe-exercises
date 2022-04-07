import './App.css';
import React from 'react';

class App extends React.Component {

  constructor() {
    super()
    this.handleClick1 = this.handleClick1.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
    this.handleClick3 = this.handleClick3.bind(this);
    this.state = {
      numeroDeCliques1: 0,
      numeroDeCliques2: 0,
      numeroDeCliques3: 0,
    }
    this.buttonColor = this.buttonColor.bind(this);
  }

  handleClick1() {
    console.log(this);
    console.log('Cliquei no 1 e saí correndo');
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliques1: estadoAnterior.numeroDeCliques1 + 1
    }))
  }
  
  handleClick2() {
    console.log(this);
    console.log('Cliquei no 2 e saí correndo');
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliques2: estadoAnterior.numeroDeCliques2 + 1
    }))
  }
  
  handleClick3() {
    console.log(this);
    console.log('Cliquei no 3 e saí correndo');
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliques3: estadoAnterior.numeroDeCliques3 + 1
    }))
    if (this.state.numeroDeCliques3 % 2 === 0) {
      console.log('é par');
    } else {
      console.log('é impar');
    }
  }

  buttonColor(numero) {
    return numero === 0 ? 'white' : numero % 2 === 0 ? 'green' : 'red';
  }

  render () {
    return <>
        <button onClick={this.handleClick1} style={{backgroundColor: this.buttonColor(this.state.numeroDeCliques1)}}>Botão 1 ~ {this.state.numeroDeCliques1}</button>
        <button onClick={this.handleClick2} style={{backgroundColor: this.buttonColor(this.state.numeroDeCliques2)}}>Botão 2 ~ {this.state.numeroDeCliques2}</button>
        <button onClick={this.handleClick3} style={{backgroundColor: this.buttonColor(this.state.numeroDeCliques3)}}>Botão 3 ~ {this.state.numeroDeCliques3}</button>
      </>
  }
}

export default App;
