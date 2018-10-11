import React, { Component, Fragment } from 'react';
import '../scss/Home.scss';
import Header from './Header';
import Footer from './Footer';
import Landing from './Landing';

class Error extends Component {
  render() {
    return (
        <Fragment>
            <p>error</p>  
            <Footer/>
        </Fragment>
    );
  }
}

export default Error;
