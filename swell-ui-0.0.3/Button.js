import React, { Component, Fragment } from 'react';

import './Button.css';

class Button extends Component {
  constructor(props) {
    super(props);

    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick(e) {
    if (this.props.onClick === undefined) {
      return false;
    }

    this.props.onClick(e);
  }

  render() {
    let buttonClasses = [];
    
    switch (this.props.color) {
      case 'primary':
        buttonClasses.push('swell-button--primary');
        break;
      case 'secondary':
        buttonClasses.push('swell-button--secondary');
        break;        
      case 'muted':
        buttonClasses.push('swell-button--muted');
        break;                
        case 'info':
        buttonClasses.push('swell-button--info');
        break;                        
        case 'success':
        buttonClasses.push('swell-button--success');
        break;                                        
      case 'danger':
        buttonClasses.push('swell-button--danger');
        break;                        
      case 'default':
      default:
        buttonClasses.push('swell-button--default');
    }

    switch (this.props.size) {
      case 'small':
        buttonClasses.push('swell-button--small');
        break;
      case 'large':
        buttonClasses.push('swell-button--large');
        break;
      case 'normal':
      default:
        buttonClasses.push('swell-button--normal');
    }    

    let style = this.props.style ? this.props.style : {};
    
    return (
      <a 
        id={this.props.id !== undefined ? this.props.id : ''} 
        className={'swell-button' + ' ' + buttonClasses.join(' ')} 
        style={style}
        onClick={this.handleOnClick}>
        {this.props.children}
      </a>
    );
  }
}

export default Button;