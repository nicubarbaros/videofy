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
    <div onClick={props.openModal}>
      <img style={styles.preview}
        src={data.src}
        /> 
    </div>
  );
};

Preview.propTypes = {

};

export default Preview;