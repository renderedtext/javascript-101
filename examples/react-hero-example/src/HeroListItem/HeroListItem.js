import React, { Component } from 'react';

class HeroListItem extends Component {
  render() {
    return (
      <li onClick={ () => this.props.selectHero(this.props.hero) }
          className="list-group-item">
        { this.props.name }
        <span className="badge">{ this.props.idx }</span>
        <button onClick={ () => this.props.removeHero(this.props.idx) }
                className="btn btn-default pull-right">remove</button>
      </li>
    );
  }
}

export default HeroListItem;
