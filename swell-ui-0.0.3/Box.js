import React, { Component, Fragment} from 'react';

class Box extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    // provide defaults
    let boxStyle = {
      display : this.props.display || 'inline-block',
      width: 'auto',
      height: 'auto',

      marginTop: 0,
      marginBottom: 0,
      marginLeft: 0,
      marginRight: 0,

      paddingTop: 0,
      paddingBottom: 0,
      paddingLeft: 0,
      paddingRight: 0,

      boxShadow: '',

      // border: '1px solid red'
    };

    // add compound margins
    if (this.props.mx !== undefined) {
      boxStyle.marginLeft = this.props.mx;
      boxStyle.marginRight = this.props.mx;
    }
    if (this.props.my !== undefined) {
      boxStyle.marginTop = this.props.my;
      boxStyle.marginBottom = this.props.my;
    }
    // specific margins override compound ones
    if (this.props.ml) {
      boxStyle.marginLeft = this.props.ml;
    }
    if (this.props.mr) {
      boxStyle.marginRight = this.props.mr;
    }    
    if (this.props.mt) {
      boxStyle.marginTop = this.props.mt;
    }
    if (this.props.mb) {
      boxStyle.marginBottom = this.props.mb;
    }    
    // add compound paddings
    if (this.props.px) {
      boxStyle.paddingLeft = this.props.px;
      boxStyle.paddingRight = this.props.px;
    }
    if (this.props.py) {
      boxStyle.paddingTop = this.props.py;
      boxStyle.paddingBottom = this.props.py;
    }   
    // specific paddings override compound ones
    if (this.props.pl) {
      boxStyle.paddingLeft = this.props.pl;
    } 
    if (this.props.pr) {
      boxStyle.paddingRight = this.props.pr;
    } 
    if (this.props.pt) {
      boxStyle.paddingTop = this.props.pt;
    }     
    if (this.props.pb) {
      boxStyle.paddingBottom= this.props.pb;
    }     

    let boxShadowWidth;
    switch (this.props.shadow) {
      case 'xl':
        boxShadowWidth = 2;
        break;
      case 'lg':
        boxShadowWidth = 1.5;
        break;        
      case 'md':
        boxShadowWidth = 1;
        break;        
      case 'sm':
        boxShadowWidth = 0.75;
        break;        
      case 'xs':
        boxShadowWidth = 0.5;
        break;        
      default:
        boxShadowWidth = 0;
    }
    if (boxShadowWidth > 0) {
      boxStyle.boxShadow = `0 0 ${boxShadowWidth}rem ${boxShadowWidth/4}rem rgba(0,0,0,0.35)`;
    }

    // add units
    boxStyle.marginTop += 'rem';
    boxStyle.marginBottom += 'rem';
    boxStyle.marginLeft += 'rem';
    boxStyle.marginRight += 'rem';

    boxStyle.paddingTop += 'rem';
    boxStyle.paddingBottom += 'rem';
    boxStyle.paddingLeft += 'rem';
    boxStyle.paddingRight += 'rem';

    return (
      <span className={this.props.className || ''} style={boxStyle}>
        {this.props.children}
      </span>
    );
  }
}

export default Box;