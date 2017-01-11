import React, { Component } from 'react';

import HeroListItem from '../HeroListItem/HeroListItem';
import NewHeroForm from '../NewHeroForm/NewHeroForm';
import HeroDetail from '../HeroDetail/HeroDetail';

class HeroList extends Component {
  constructor() {
    super();
    this.state = {
      hero: null
    };
  }
  render() {
    return (
      <div className="container">
        <h1>Heroes</h1>
        <ul className="list-group">
          { this.props.heroes.map((hero, index) =>
              <HeroListItem selectHero={ this.selectHero } hero={ hero } name={ hero.name }
                idx={ index } remove={ this.props.removeHero } key={ index } />
            )
          }
        </ul>
        { this.state.hero !== null &&
          <HeroDetail hero={ this.state.hero } />
        }
        <NewHeroForm addHero={ this.props.addHero } />
      </div>
    );
  }
  selectHero = hero => {
    this.setState({
      hero: hero
    });
  }
}

export default HeroList;
