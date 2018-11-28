import React, { Component } from 'react';

import Hamburger from 'react-hamburger-menu';

class HamburgerButton extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      open: false,
      justClicked: false
    };
    this.ANIMATION_DURATION = 250;

    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick(e) {
    this.setState({
      open: !this.state.open,
      justClicked: true
    });
    window.setTimeout(() => {
      this.setState({
        justClicked: false
      });
    }, this.ANIMATION_DURATION);

    if (this.props.onClick !== undefined) {
      this.props.onClick(e, this.ANIMATION_DURATION);
    }
  }
  
  render() {
    const BUTTON_WIDTH =  this.props.width  ? Number(this.props.width) :  24;
    const BUTTON_HEIGHT = this.props.hegiht ? Number(this.props.hegiht) : 16;
    
    return (
      <div style={{cursor: 'pointer'}} onClick={this.handleClick} className={this.state.justClicked ? 'animated tada' : ''}>
        <Hamburger
          isOpen={this.props.open !== undefined ? this.props.open : this.state.open}

          className="swell-hamburgerbutton__button"
          width={BUTTON_WIDTH}
          height={BUTTON_HEIGHT}
          strokeWidth={3}
          rotate={0}
          color={this.props.color || '#33559D'}
          borderRadius={0}
          animationDuration={0.25}
        />
      </div>
    );
  }
}

export default HamburgerButton;