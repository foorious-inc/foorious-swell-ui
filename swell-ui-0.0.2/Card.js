import React, { Component, Fragment } from 'react';

import './Card.css';

class Card extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="swell-card">
        {this.props.children}      
      </div>
    );
  }
}

export default Card;