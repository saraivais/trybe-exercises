// A pokedex representa a enciclopédia de pokemons. Este componente recebe como entrada uma lista de pokemons para serem mostrados em tela. Para cada um dos pokemons recebidos, Pokedex chama o componente Pokemon.

import React from "react";
import pokemons from "./data";
import Pokemon from "./Pokemon";
import PropTypes from "prop-types"

class Pokedex extends React.Component {
  render () {
    return <ol className="card-container">
        {pokemons.map((onePokemon) => <Pokemon key={onePokemon.id} pokemon={onePokemon}/>)}
      </ol>
  }
}

Pokedex.propTypes = {
  pokemons: PropTypes.array,
}

export default Pokedex