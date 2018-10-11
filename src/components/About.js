import React, { Component, Fragment } from 'react';
import '../scss/Home.scss';
import Header from './Header';
import Footer from './Footer';
import Landing from './Landing';

class About extends Component {
  render() {
    return (
        <Fragment>
            <p>about</p>
            <Footer/>
        </Fragment>
    );
  }
}

export default About;
