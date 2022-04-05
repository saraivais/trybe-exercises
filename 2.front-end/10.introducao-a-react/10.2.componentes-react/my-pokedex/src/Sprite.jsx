import React from "react";
import PropTypes from "prop-types"

class Sprite extends React.Component {
  render () {
    return <img className="pokemon-sprite" src={this.props.url} alt={this.props.pokemonName}/>
  }
}

Sprite.propTypes = {
  url: PropTypes.string,
  pokemonName: PropTypes.string
}

export default Sprite