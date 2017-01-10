import React, { Component } from 'react';

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }
  }
  render() {
    return (
      <div className="form-group">
        <input value={ this.state.value } onChange={ this.handleChange }
          className="form-control" type={ this.props.type } placeholder={ this.props.name } name={ this.props.name } />
      </div>
    );
  }
  handleChange = event => {
    this.setState({
      value: event.target.value
    });
    this.props.handleInputChange(event.target.name, event.target.value);
  }
}

export default Input;
