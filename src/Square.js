import React from 'react'

class Square extends React.Component {
  state = {
    tile: this.props.tile
  }

  render() {
    return (
      <div
        className={this.props.selectedSquare[0] === this.props.x &&
           this.props.selectedSquare[1] === this.props.y ?
           `selected square ${this.state.tile}` : `square ${this.state.tile}`}>
      </div>
    )
  }

}

export default Square
