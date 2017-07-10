import React, { Component } from 'react';

import { Home } from '../Pages/index';
import classnames from 'classnames';

let styles = {
  mainWrapper: {
    maxWidth: '1200px',
    margin: '0 auto'
  }
}
class Page extends Component {
  render () {
    return (
      <div style={styles.mainWrapper}>
        <Home/>
      </div>
    )
  }
}

export default Page;

