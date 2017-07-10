import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

var styles = {
  content: {
    textAling: 'center',
    fontSize: '35px'
  }
};

class Loader extends PureComponent {

  render () {
    return(
      <div style={styles.content}>
        {this.props.text}
      </div>
    )
  }
}

Loader.propTypes = {
  text: PropTypes.string,
};

Loader.defaultProps = {
  text: 'Loading',
};

export default Loader;