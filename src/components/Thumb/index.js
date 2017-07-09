import React from 'react';
import PropTypes from 'prop-types';

let styles = {
  thumb: {
    width: '250px',
    height: 'auto'
  }
};

const Thumbs = (props) => {
  const data = props

  const thumbs = data.thumbs.map((element, index) => <img key={index.toString()} src={element.src} alt={element.alt} style={styles.thumb}/> );
  
  return (
    <div id="thumbs" onClick={props.selectedThumb}>
      { thumbs }
    </div>
  );
};

Thumbs.propTypes = {
  thumbs: PropTypes.array.isRequired,
  selectedThumb:  PropTypes.func.isRequired
};

export default Thumbs;