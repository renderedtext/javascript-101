import React, { Component } from 'react';
import axios from 'axios';

import HeroListItem from '../HeroListItem/HeroListItem';
import NewHeroForm from '../NewHeroForm/NewHeroForm';
import HeroDetail from '../HeroDetail/HeroDetail';

class HeroList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      heroes: [],
      hero: null
    };
  }
  render() {
    return (
      <div className="container">
        <h1>Heroes</h1>
        <ul className="list-group">
          { this.state.heroes.map( (hero, index) =>
              <HeroListItem selectHero={ this.selectHero } hero={ hero } name={ hero.name } key={ index }
                idx={ index } remove={ this.removeHero } />
            )
          }
        </ul>
        { this.state.hero !== null &&
          <HeroDetail hero={ this.state.hero } />
        }
        <NewHeroForm addHero={ this.addHero } />
      </div>
    );
  }
  removeHero = idx => {
    axios.delete(`http://localhost:3001/hero/${idx}`)
      .then(response => {
      })
      .catch(error => {
        console.log(error);
      });
    this.setState({
      heroes: this.state.heroes.filter((hero, index) => index !== idx),
      hero: null
    });
  };
  addHero = hero => {
    axios.post('http://localhost:3001/hero', hero)
      .then(response => {
      })
      .catch(error => {
        console.log(error);
      });
    this.setState({
      heroes: this.state.heroes.concat(hero)
    });
  }
  selectHero = hero => {
    this.setState({
      hero: hero
    });
  }
  componentDidMount = () => {
    axios.get('http://localhost:3001/heroes')
      .then( response => {
        this.setState({
          heroes: response.data
        });
      })
      .catch( error => {
        console.log(error);
      });
  }
}

export default HeroList;
