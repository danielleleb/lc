import React, { Component, Fragment } from 'react';
import '../scss/Home.scss';
import Header from './Header';
import Footer from './Footer';
import Landing from './Landing';

class Home extends Component {
  render() {
    return (
        <Fragment>
            <Landing/>
            <Footer/>
        </Fragment>
    );
  }
}

export default Home;
