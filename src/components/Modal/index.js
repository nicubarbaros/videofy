import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import VideoPlayer from '../VideoPlayer'

import videojs from 'video.js'

class Modal extends PureComponent {

  
  render () {

    let meta = this.props.meta;
    let poster = this.props.poster;


    const videoJsOptions = {
      autoplay: false,
      controls: true,
      sources: [{
        src: meta.src,
        type: meta.type,
      }],
      poster: poster
    }

    return(
      <div id="myModal" class="modal">
        <div class="modal--content">
          <span onClick={this.props.closeModal} class="close">&times;</span>
          <div class="video--section">
            <VideoPlayer { ...videoJsOptions } />
          </div>
          <div class="info--section">
            <h4>Title: {meta.name} </h4>
            <p>Duration: {meta.duration} </p>
            <p>Resolution: {meta.width} x {meta.height} </p>
            <p>Size: {meta.size} mb</p>
            <p>Type: {meta.type}</p>
          </div>
        </div>

      </div>
    )
  }
}

Modal.propTypes = {
  meta: PropTypes.object.isRequired,
  closeModal: PropTypes.func.isRequired
};

Modal.defaultProps = {
  text: 'Loading',
  speed: 300
};

export default Modal;

