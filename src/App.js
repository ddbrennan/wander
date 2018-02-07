import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Grid from './Grid'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Grid autoFocus gridWidth={3} />
      </div>
    );
  }
}

export default App;
