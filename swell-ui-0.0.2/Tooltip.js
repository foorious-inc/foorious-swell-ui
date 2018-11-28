import React, { Component, Fragment } from 'react';

import Tippy from '@tippy.js/react';
import 'tippy.js/dist/tippy.css';

class Tooltip extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Tippy content={this.props.content} arrow={true} animation="shift-away" inertia={true} duration={350} delay={[100, 50]}>
        {this.props.children}
      </Tippy>
    );
  }
}

export default Tooltip;