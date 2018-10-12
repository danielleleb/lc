import React, { Component, Fragment } from 'react';
import '../scss/Home.scss';
import Header from './Header';
import Footer from './Footer';
import Landing from './Landing';

class About extends Component {
  render() {
    return (
        <div>
            <div className="background about"></div>
            <div className="container">
                <p>about</p>
            </div>
        </div>
    );
  }
}

export default About;
