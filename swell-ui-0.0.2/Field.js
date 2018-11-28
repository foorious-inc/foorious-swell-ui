import React, { Component, Fragment } from 'react';

import './Field.css';
import './lib/animate.css';

class Field extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ''
    };

    this.handleOnChange = this.handleOnChange.bind(this);
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      value: newProps.value
    });
  }

  handleOnChange(e) {
    const field = e.currentTarget;
    if (!field) {
      console.error('Cannot get field');

      return false;
    }

    const value = e.currentTarget.value;

    this.setState({
      value
    });

    if (this.props.onChange !== undefined) {
      this.props.onChange(e, value);
    }    
  }

  render() {
    let field;
    let placeholder;
    let label;

    placeholder = this.props.placeholder || this.props.label;
    label = this.state.value !== '' ? this.props.label : '';

    switch (this.props.type) {
      case 'text':
      case 'email':
      case 'number':
      case 'url':
      case 'password':
        field = (
          <input 
            id={this.props.id || ''}
            className={'swell-form__form-control' + (this.props.className ? ' ' + this.props.className : '')}
            type={this.props.type} 
            name={this.props.name || this.state.value}
            placeholder={placeholder}
            value={this.props.value || this.state.value}
            onChange={this.handleOnChange}
            disabled={this.props.disabled !== undefined ? 'disabled' : false}
          />
        );
        break;
      case 'textarea':
        field = (
          <textarea 
            id={this.props.id || ''}          
            className={'swell-form__form-control' + (this.props.className ? ' ' + this.props.className : '')}          
            type={this.props.type} 
            name={this.props.name || this.state.value}
            placeholder={placeholder}
            value={this.props.value || this.state.value}
            onChange={this.handleOnChange}
            disabled={this.props.disabled !== undefined ? 'disabled' : false}            
          />
        );      
        break;
      case 'select':
        field = (
          <select 
            id={this.props.id || ''}          
            className={'swell-form__form-control' + (this.props.className ? ' ' + this.props.className : '')}          
            type={this.props.type} 
            name={this.props.name || this.state.value}
            placeholder={placeholder}
            value={this.props.value || this.state.value}
            onChange={this.handleOnChange}        
            disabled={this.props.disabled !== undefined ? 'disabled' : false}            
          >
            {this.props.children}
          </select>
        );
        break;
      default:
        field = <p>SORRY, INPUT TYPE NOT IMPLEMENTED (I LOVE ALLCAPS!!!)</p>
    }
    return (
      <label>
        <div className="swell-form__label">{label}</div>
        {field}
      </label>
    );
  }
};

export default Field;