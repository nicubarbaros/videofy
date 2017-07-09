import '../dist/css/style.css';
import React from 'react';
import ReactDOM from 'react-dom';

import { Page } from './containers/Page/index'

// Don't forget to add your API key

// Our views are rendered inside the #content div
ReactDOM.render(
  <Page/>,
  document.getElementById('content')
  );