import React from 'react'

class Square extends React.Component {
  state = {
    tile: this.props.tile
  }

  setClassName() {
    
  }

  render() {
    return (
      <div
        className={this.props.selectedSquare[0] === this.props.x &&
           this.props.selectedSquare[1] === this.props.y ?
           `selected square ${this.state.tile} ${this.props.owned ? "owned" : ""}` : `square ${this.state.tile} ${this.props.owned ? "owned" : ""}`}>
      </div>
    )
  }

}

export default Square
