import React from 'react';
import PropTypes from 'prop-types';

let styles = {
  preview: {
    marginTop: '50px',
    width: '100%',
    height: 'auto'
  },
};

const Preview = (props) => {
  const data = props

  return (
    <div onClick={props.openVideo}>
      <img style={styles.preview}
        src={data.src}
        /> 
    </div>
  );
};

Preview.propTypes = {

};

export default Preview;