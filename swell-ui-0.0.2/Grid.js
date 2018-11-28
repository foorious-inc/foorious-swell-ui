import React, { Component, Fragment } from 'react';

import './lib/bootstrap-grid.min.css';

class Container extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id={this.props.id || ''} className="container">
        {this.props.children}
      </div>
    );
  }
}

class Row extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id={this.props.id || ''} className="row" style={this.props.style || {}}>
        {this.props.children}
      </div>
    );
  }
}

class Col extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // if a prop is set, all bigger onces inherit from that, until the last one
    let classes = [];
    let breakpointNames = ['xs', 'sm', 'md', 'lg', 'xl'];
    let columns = {
      'xs': 12,
      'sm': 12,
      'md': 12,
      'lg': 12,
      'xl': 12
    };
    for (let i=0; i<breakpointNames.length; i++) {
      // set this and all bigger breakpoints to the value provided
      if (this.props[breakpointNames[i]] !== undefined) {
        for (let j=i; j<breakpointNames.length; j++) {
          columns[breakpointNames[j]] = this.props[breakpointNames[i]];
        }
      }
    }
    breakpointNames.reverse().forEach((breakpoint) => {
      classes.push('col-' + breakpoint + '-' + columns[breakpoint]);
    });

    return (
      <div id={this.props.id || ''} className={classes.join(' ')} style={this.props.style || {}}>
        {this.props.children}
      </div>
    );
  }
}

export {
  Container,
  Row,
  Col
};


