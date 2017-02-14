import React, { Component } from 'react';

class HeroDetail extends Component {
  render() {
    return (
      <div className="container">
        <h1>Details</h1>
        <p name="name">Name: { this.props.hero.name }</p>
        <p name="type">Type: { this.props.hero.type }</p>
        <p name="health">Health: { this.props.hero.health }</p>
        <p name="mana">Mana: { this.props.hero.mana }</p>
        <p name="damage">Damage: { this.props.hero.dmg }</p>
      </div>
    );
  }
}

export default HeroDetail;
