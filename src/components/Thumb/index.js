import React from 'react';
import PropTypes from 'prop-types';

import style from '../../assets/stylesheets/base.scss';

let styles = {
  thumb: {
    width: '100px',
    height: 'auto'
  },

  selected: {
    width: '100px',
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
    <div id="thumbs" onClick={props.onSelect} className={style.thumbsWrapper}>
      { thumbs }
    </div>
  );
};

Thumbs.propTypes = {
  thumbs: PropTypes.array.isRequired,
  onSelect:  PropTypes.func.isRequired
};

export default Thumbs;