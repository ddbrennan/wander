import React from 'react'
import Square from './Square'

class Grid extends React.Component {
  state = {
    selectedSquare: [0,0]
  }


  makeSquares = () => {
    const tiles = ["red", "blue", "yellow", "purple", "green"]
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
      case 87:
        this.move(0, 1);
        break;
      case 68:
        this.move(1, 1);
        break;
      case 83:
        this.move(0, -1);
        break;
      case 65:
        this.move(1, -1);
        break;
    }
  }

  move = (dir, change) => {
    let coords = this.state.selectedSquare
    if ((coords[dir] + change) > -1 && (coords[dir] + change) < this.props.gridWidth) {
      coords[dir] += change
    }
    this.setState({
      selectedSquare: coords
    })
  }

  componentDidMount = () => {
    window.addEventListener("keydown", this.handleKeyPress)
  }

  componentWillUnmount = () => {
    window.removeEventListener("keydown", this.handleKeyPress)
  }

  render() {
    return (
      <div className="grid-box"
           style={{"width": this.props.gridWidth * 150, "height": this.props.gridWidth * 150}}>
        { this.makeSquares() }
      </div>
    )
  }
}

export default Grid
