import React, { Component, Fragment } from 'react';

class Text extends Component {
  constructor(props) {
    super(props);
    
    this.state = {};
  }

  render() {
    if (!this.props.children) {
      return '';
    }
    
    let content = this.props.children.split('\n').map((line) => {
      // line = line.replace(/(http:\/\/[^\s]+)/g, "<a href='$1'>$1</a>");

      // make links clickable
      let tokens = line.split(/\s/);

      let hypertext = tokens.map((token, i) => {
        let hasSpace = i !== (tokens.length - 1);
        let maybeSpace = hasSpace ? ' ' : '';

        if (token.match(/^http\:\//) || token.match(/^https\:\//)) {
          return (
            <a href={token}>{token + maybeSpace}</a>
          );
        } else {
          return token + maybeSpace;
        }
      });

      return (
        <Fragment>
          {hypertext}<br />
        </Fragment>
      );
    });
    
    return content;
  }
}

export default Text;