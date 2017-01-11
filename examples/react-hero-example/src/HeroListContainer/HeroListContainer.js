import React, { Component } from 'react';

import HeroList from '../HeroList/HeroList';

class HeroListContainer extends Component {
  constructor() {
    super();
    this.state = {
      heroes: []
    }
  }

  render() {
    return (
      <HeroList />
    );
  }

  componentDidMount = () => {


  }

  addHero = hero => {

  }

  removeHero = idx => {

  }
}
