import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import HeroList from './HeroList/HeroList';

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1>{this.props.title}</h1>
        <HeroList />
      </div>
    );
  }
}

export default App;
