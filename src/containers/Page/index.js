import React, { Component } from 'react';

import Header from '../../components/Header/index';
import Footer from '../../components/Footer/index';
import { Home } from '../Pages/index';
import classnames from 'classnames';


import style from '../../assets/stylesheets/base.scss';

class Page extends Component {
  render () {
    let content = <Home/>
    return (
      <div className= {style.wrapper}>
        <Header/>
        {content}
        <Footer/>
      </div>
    )
  }
}

export default Page;

