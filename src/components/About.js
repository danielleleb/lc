import React, { Component, Fragment } from 'react';
import '../scss/Home.scss';
import Header from './Header';
import Footer from './Footer';
import Landing from './Landing';

class About extends Component {
  render() {
    return (
        <div className="about">
            <div className="background"></div>
            <div className="container">
                <div className="text">
                    <p>about me about me about meee</p>

                </div>
            </div>
        </div>
    );
  }
}

export default About;
