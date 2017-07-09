import React from 'react';
import ReactDOM from 'react-dom';

import Page from './containers/Page/index'

// Our views are rendered inside the #content div
ReactDOM.render(
  <Page/>,
  document.getElementById('content')
);