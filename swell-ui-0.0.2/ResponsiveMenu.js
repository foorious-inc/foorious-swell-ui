import React, { Component, Fragment } from 'react';

import HamburgerButton from './HamburgerButton';
import Box from './Box';

import "./lib/animate.css";

/*
NOTES
There is a "open" property that gets set after the animation is done.
"busy" means the menu is changing status
*/

class ResponsiveMenu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      busy: false, // is opening/closing

      isFirstRun: true, // whether it's the first time we open the menu

      window: window.innerWidth
    };
    this.BREAKPOINT_WIDTH = 1199;
    this.MENU_ANIMATION_DURATION = 600;
    this.HAMBURGER_BUTTON_WIDTH = 25;
    this.HAMBURGER_BUTTON_HEIGHT = 18;

    this.toggleMenu = this.toggleMenu.bind(this);
    this.getOffset = this.getOffset.bind(this);
  }

  componentWillMount() {
    // keep track of window to trigger mobile version
    window.addEventListener("resize", (e) => {
      this.setState({
        window: window.innerWidth
      });
    });
  }

  toggleMenu(e) {
    if (this.state.busy) {
      return;
    }

    this.setState({
      busy: true
    });

    window.setTimeout(() => {
      this.setState({
        open: !this.state.open
      });
    }, this.MENU_ANIMATION_DURATION);    

    window.setTimeout(() => {
      this.setState({
        busy: false,
        isFirstRun: false
      });
    }, this.MENU_ANIMATION_DURATION);
  }

  getOffset(el) {
    var _x = 0;
    var _y = 0;

    while (el && !isNaN(el.offsetLeft) && !isNaN(el.offsetTop)) {
      _x += el.offsetLeft - el.scrollLeft;
      _y += el.offsetTop - el.scrollTop;
      el = el.offsetParent;
    }

    return { 
      top: _y, 
      left: _x 
    };
  }

  render() {
    let menu;

    if (this.state.window <= this.BREAKPOINT_WIDTH) {
      // figure out some values
      let offsetTop = 0;
      const MARGIN_TOP = this.HAMBURGER_BUTTON_HEIGHT * 2; // distance of menu from hamburger button
      const MAX_Z_INDEX = 2147483647; // see https://stackoverflow.com/questions/491052/minimum-and-maximum-value-of-z-index

      let el = document.querySelector('.swell-responsivemenu__button-container');
      if (el) {
        offsetTop = this.getOffset(el).top + this.HAMBURGER_BUTTON_HEIGHT + MARGIN_TOP;  
      }

      let hidden = this.state.isFirstRun || !this.state.busy && !this.state.open ? true : false; // hide if initial state, or if closed

      // set styles
      let buttonContainerStyle = {
        padding: '3px'
      };
      let menuStyle = {
        position: 'fixed', 
        top: offsetTop + 'px', 
        left: 0, width: '100vw',
        zIndex: MAX_Z_INDEX,

        // backgroundColor: '#FFF',
        
        display: hidden ? 'none' : 'block',
        overflow: 'hidden'
      };

      let effect;
      if (this.state.busy) { // changing status
        if (!this.state.open) {
          // if opening...
          effect = 'bounceInDown';
        } else {
          // if closing...
          effect = 'bounceOutUp';
        }        
      } else {// permanent status
        effect = '';
      }
      menu = (
        <React.Fragment>
          <div className="swell-responsivemenu__button-container">
            <div style={buttonContainerStyle}>
              <HamburgerButton 
                open={this.state.open}
                onClick={this.toggleMenu}
                width={this.HAMBURGER_BUTTON_WIDTH}
                height={this.HAMBURGER_BUTTON_HEIGHT}
                color="#fff"
              />
            </div>
          </div>

          <div className="swell-responsivemenu__menu-container" style={menuStyle}>
            {
              <div style={{display: hidden ? 'none' : 'block'}} className={effect ? 'animated ' + effect : ''} onClick={this.toggleMenu}>
                {this.props.children}
              </div>
            }
          </div>
        </React.Fragment>
      )
    } else {
      menu = (
        <React.Fragment>
          {this.props.children}
        </React.Fragment>        
      );
    }

    return (
      <div className="swell-responsivemenu">
        {menu}
      </div>
    );
  }
}

export default ResponsiveMenu;