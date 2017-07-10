import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import style from '../../assets/stylesheets/base.scss';

class Modal extends PureComponent {

  render () {
    return(
      <div id="myModal" class={style.modal}>
        <div class={style.modalContent}>
          <span class={style.close}>&times;</span>
          <p>Some text in the Modal..</p>
        </div>

      </div>
    )
  }
}

Modal.propTypes = {
  text: PropTypes.string,
  speed: PropTypes.number
};

Modal.defaultProps = {
  text: 'Loading',
  speed: 300
};

export default Modal;