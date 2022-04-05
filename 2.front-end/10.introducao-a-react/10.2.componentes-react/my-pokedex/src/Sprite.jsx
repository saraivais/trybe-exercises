import React from "react";

class Sprite extends React.Component {
  render () {
    return <img src={this.props.url} alt={this.props.pokemonName}/>
  }
}

export default Sprite