import React, { Component } from 'react';
import axios from 'axios';

import HeroList from '../HeroList/HeroList';

class HeroListContainer extends Component {
  constructor() {
    super();
    this.state = {
      heroes: []
    }
    this.url = 'http://localhost:3001';
  }
  render() {
    return (
      <HeroList heroes={ this.state.heroes }
                addHero={ this.addHero }
                removeHero={ this.removeHero } />
    );
  }
  componentDidMount = () => {
    axios.get(`${this.url}/heroes`)
      .then(response => {
       this.setState({
          heroes: response.data
        });
      })
      .catch(error => {
        console.log(error);
     });
  }
  addHero = hero => {
    axios.post(`${this.url}/hero`, hero)
      .then(response => {
        if (response.data === 'added') {
          this.setState({
            heroes: this.state.heroes.concat(hero)
          });
       }
      })
      .catch(error => {
        console.log(error.message);
      });
  }
  removeHero = idx => {
    axios.delete(`${this.url}/hero/${idx}`)
      .then(response => {
        if (response.data === 'deleted') {
          this.setState({
            heroes: this.state.heroes.filter((hero, index) => index !== idx)
          })
        }
      })
      .catch(error => {
        console.log(error);
      });
  }
}

export default HeroListContainer;
