import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  render() {
    return (
      <>
        <div>Home Page!</div>
        <Link to="/login">Login Page</Link>
      </>);
  }
}

export default Home;
