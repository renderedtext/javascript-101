import React, { Component } from 'react';

import Input from '../Input/Input';
import Hero from '../models/hero';

class NewHeroForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hero: new Hero('', '', 0, 0, 0)
    };
  }
  render() {
    return (
      <div>
        <h1>Add New Hero</h1>
        <form className="form-inline">
          <Input handleInputChange={ this.handleInputChange } type="text" name="name" />
          <Input handleInputChange={ this.handleInputChange } type="text" name="type" />
          <Input handleInputChange={ this.handleInputChange } type="number" name="health" />
          <Input handleInputChange={ this.handleInputChange } type="number" name="mana" />
          <Input handleInputChange={ this.handleInputChange } type="number" name="damage" />
          <button onClick={ () => this.props.addHero(this.state.hero) } className="btn btn-default" type="button">Add Hero</button>
        </form>
      </div>
    );
  }
  handleInputChange = (key, value) => {
    let hero = this.state.hero;
    hero[key] = value;
    this.setState({
      hero: hero
    });
  }
}

export default NewHeroForm;
