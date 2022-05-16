import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Home from './Home/Home';
import Login from './Login/Login';
import ClientesCadastrados from './ClientesCadastrados/ClientesCadastrados';
import Cadastro from './Cadastro/Cadastro';

class App extends React.Component {
  render () {
    return (
      <>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/clientes-cadastrados">Clientes Cadastrados</Link>
          <Link to="/cadastro">Cadastro</Link>

        </nav>
        <Switch>
          <Route exact path="/" component={ Home }/>
          <Route path="/login" render={(props) => <Login {...props} /> } />
          <Route path="/clientes-cadastrados" component={ ClientesCadastrados }/>
          <Route path="/cadastro" component={ Cadastro }/>
        </Switch>
      </>
    );
  }
}

export default App;
