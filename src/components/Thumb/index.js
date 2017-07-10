import React from 'react';
import PropTypes from 'prop-types';

let styles = {
  thumb: {
    width: '250px',
    height: 'auto'
  },

  selected: {
    width: '250px',
    height: 'auto',
    border: '2px solid red'
  }
};

const Thumbs = (props) => {
  const data = props
  const thumbs = data.thumbs.map((element, index) => (
      <img 
        key={index.toString()} 
        src={element.src} 
        alt={element.alt} 
        style={element.src === data.selectedThumb ? styles.selected:styles.thumb}
        /> 
      ));

  return (
    <div id="thumbs" onClick={props.onSelect}>
      { thumbs }
    </div>
  );
};

Thumbs.propTypes = {
  thumbs: PropTypes.array.isRequired,
  onSelect:  PropTypes.func.isRequired
};

export default Thumbs;