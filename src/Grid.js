import React from 'react'
import Square from './Square'

class Grid extends React.Component {
  state = {
    selectedSquare: [0,0]
  }


  makeSquares = () => {
    const tiles = ["forest", "mountain", "field", "swamp", "castle"]
    let arr = []
    let key = 0
    for(let i = 0; i < (this.props.gridWidth); i++) {
        for(let j = 0; j < this.props.gridWidth; j++) {
          arr.push(<Square
                      x={j}
                      y={i}
                      key={key++}
                      tile={ tiles[(Math.floor(Math.random() * tiles.length))] }
                      selectedSquare={ this.state.selectedSquare }/>)
      }
    }
    return arr
  }

  handleKeyPress = (e) => {
    switch (e.which) {
      case 119:
        this.goUp();
        break;
      case 100:
        this.goRight();
        break;
      case 115:
        this.goDown();
        break;
      case 97:
        this.goLeft();
        break;
    }
  }

  goLeft() {
    let coords = this.state.selectedSquare
    if ((coords[1] - 1) > -1) {
      coords[1] -= 1
    }
    this.setState({
      selectedSquare: coords
    })
  }

  goDown() {
    let coords = this.state.selectedSquare
    if ((coords[0] - 1) > -1) {
      coords[0] -= 1
    }
    this.setState({
      selectedSquare: coords
    })
  }

  goRight() {
    let coords = this.state.selectedSquare
    if ((coords[1] + 1) < this.props.gridWidth) {
      coords[1] += 1
    }
    this.setState({
      selectedSquare: coords
    })
  }

  goUp() {
    let coords = this.state.selectedSquare
    if ((coords[0] + 1) < this.props.gridWidth) {
      coords[0] += 1
    }
    this.setState({
      selectedSquare: coords
    })
  }

  render() {
    return (
      <div className="grid-box"
           style={{"width": this.props.gridWidth * 150, "height": this.props.gridWidth * 150}}
           onKeyPress={ this.handleKeyPress }
           tabIndex="0">
        { this.makeSquares() }
      </div>
    )
  }
}

export default Grid
