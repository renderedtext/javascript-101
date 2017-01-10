import React, { Component } from 'react';

import HeroListItem from '../HeroListItem/HeroListItem';
import NewHeroForm from '../NewHeroForm/NewHeroForm';
import Hero from '../models/hero';

class HeroList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      heroes: [
        new Hero('Zed', 'Assassin', 600, 0, 70),
        new Hero('Shen', 'Tank', 700, 0, 60),
        new Hero('Sona', 'Support', 550, 300, 50)
      ]
    };
  }
  render() {
    return (
      <div className="container">
        <h1>Heroes</h1>
        <ul className="list-group">
          { this.state.heroes.map( (hero, index) =>
              <HeroListItem name={ hero.name } key={ index } idx={ index } remove={ this.removeHero } />
            )
          }
        </ul>
        <NewHeroForm addHero={ this.addHero } />
      </div>
    );
  }
  removeHero = idx => {
    this.setState({
      heroes: this.state.heroes.filter((hero, index) => index !== idx)
    });
  };
  addHero = hero => {
    this.setState({
      heroes: this.state.heroes.concat(hero)
    });
  }
}

export default HeroList;
