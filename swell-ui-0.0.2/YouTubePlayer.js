import React, { Component, Fragment } from 'react';

import './YouTubePlayer.css';

class YouTubePlayer extends Component {
  constructor(props) {
    super(props);
    
    this.state = {};
  }

  render() {
    if (!this.props.videoId) {
      return '';
    }

    return (
      <div className="swell-youtube-player__embed-container">
        <iframe src={'https://www.youtube.com/embed/' + this.props.videoId} frameborder="0" allowfullscreen></iframe>
      </div>
    );
  }
}

export default YouTubePlayer;