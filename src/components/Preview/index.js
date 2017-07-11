import React from 'react';
import PropTypes from 'prop-types';

let styles = {
  preview: {
    width: '100%',
    height: 'auto'
  },
};

const Preview = (props) => {
  const data = props

  return (
    <div>

      <div class="preview--wrapper" onClick={props.openModal}>
        <img style={styles.preview}
          src={data.src}
          /> 
        <div class="over--image">
          <div class="play--icon"></div>
        </div>
        
        <div class="meta--info-wrapper">
          <h5>{data.meta.name}</h5>
          <h5>{data.meta.duration}</h5>
        </div>
      </div>
    </div>
  );
};

Preview.propTypes = {

};

export default Preview;