import React from 'react';
import videojs from 'video.js'
import "video.js/dist/video-js.css";

export default class VideoPlayer extends React.Component {
  componentDidMount() {
    // this.props.sources[0].src = 'https://vjs.zencdn.net/v/oceans.mp4'
    this.player = videojs(this.videoNode, this.props, function onPlayerReady() {
      console.log('onPlayerReady', this)
    });
  }

  // destroy player on unmount
  componentWillUnmount() {
    if (this.player) {
      this.player.dispose()
    }
  }
  
  render() {
    return (
      <div data-vjs-player>
        <video ref={ node => this.videoNode = node } className="video-js vjs-default-skin"></video>
      </div>
    )
  }
}
