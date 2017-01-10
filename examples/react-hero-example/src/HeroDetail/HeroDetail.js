import React, { Component } from 'react';

class HeroDetail extends Component {
  render() {
    return (
      <div className="container">
        <h1> Details </h1>
        <p>Name: { this.props.hero.name }</p>
        <p>Type: { this.props.hero.type }</p>
        <p>Health: { this.props.hero.health }</p>
        <p>Mana: { this.props.hero.mana }</p>
        <p>Damage: { this.props.hero.dmg }</p>
      </div>
    );
  }
}

export default HeroDetail;
