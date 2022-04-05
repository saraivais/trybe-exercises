import React from "react";
import PropTypes from "prop-types"

class Info extends React.Component {
  render () {
    return <p>{this.props.string}</p>
  }
}

Info.propTypes = {
  string: PropTypes.string
}

export default Info