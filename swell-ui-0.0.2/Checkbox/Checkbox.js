import React from 'react';

class Checkbox extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    if (this.props.onClick !== undefined) {
      const elem = e.currentTarget.querySelector('input[type="checkbox"]');
      console.dir(elem);
      const checked = !elem.checked;

      return this.props.onClick(checked);
    }
  }

  render() {
    return (
      <label className="swell-checkbox" onMouseUp={this.handleClick}>
        <input type="checkbox" /> {this.props.label}

        <span class="swell-checkbox__checkmark"></span>
      </label>
    );
  }
}

export default Checkbox;