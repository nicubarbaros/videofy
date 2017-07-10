import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import VideoPlayer from '../VideoPlayer'

import videojs from 'video.js'

class Modal extends PureComponent {

  
  render () {

    let meta = this.props.meta;


    const videoJsOptions = {
      autoplay: true,
      controls: true,
      sources: [{
        src: meta.src,
        type: 'video/mp4'
      }]
    }

    return(
      <div id="myModal" class="modal">
        <div class="modal--content">
          <span onClick={this.props.closeModal} class="close">&times;</span>
          <div class="video--section">
            <VideoPlayer { ...videoJsOptions } />
          </div>
          <div class="info--section">
            {meta.name}
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

