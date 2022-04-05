// Este componente deve representar um pokemon. Recebe como entrada um objeto que contém informações referentes a um pokemon específico. Este componente preisa retornar as seguintes informações obrigatórias a serem mostradas para quem for usar a aplicação (validadas utilizando propTypes)
// Nome do pokemon ~string
// Tipo do pokemon ~string
// Peso médio do pokemon, acompanhando unidade de medida usada ~number, string
// Imagem do pokemon ~string

import React from "react";
import Info from "./Info";
import Sprite from "./Sprite"
import PropTypes from "prop-types"

class Pokemon extends React.Component {

  render () {
    return <li className="pokemon-card">
      <div className="pokemon-info">
        <Info string={this.props.pokemon.name}/>
        <Info string={this.props.pokemon.type}/>
        <Info string={`${this.props.pokemon.averageWeight.value} ${this.props.pokemon.averageWeight.measurementUnit}`}/>
      </div>
      <Sprite url={this.props.pokemon.image} pokemonName={this.props.pokemon.name}/>
    </li>
  }
}

Pokemon.propTypes = {
  pokemon: PropTypes.object,
}

export default Pokemon