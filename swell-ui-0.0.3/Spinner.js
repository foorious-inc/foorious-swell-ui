import React from 'react';

class Spinner extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {};
  }

  render() {
    var message = this.props.message || "";
    var position = this.props.position ? this.props.position: 'left';
    var spinner = <img src="https://www.drupal.org/files/issues/throbber_13.gif" style={{height: '1.3em', lineHeight: '1em', verticalAlign: 'top'}} />

    return (
      <span>{position == 'left' ? <span>{spinner} {message}</span> : <span>{message} {spinner}</span>}</span>
    );
  }
}

export default Spinner;