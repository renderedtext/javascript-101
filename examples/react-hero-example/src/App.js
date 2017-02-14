import React, { Component } from 'react';
import './App.css';

import HeroListContainer from './HeroListContainer/HeroListContainer';

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1>{this.props.title}</h1>
        <HeroListContainer />
      </div>
    );
  }
}

export default App;
