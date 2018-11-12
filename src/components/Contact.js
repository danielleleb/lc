import React, { Component, Fragment } from 'react';
import '../scss/contact.scss';
import Header from './Header';
import Footer from './Footer';
import Landing from './Landing';

class Contact extends Component {
  render() {
    return (
        <div className=" contact">
            <div className="background"></div>
            <div className="container">
            <div className="text">
                <h3 className="title">
                    contact
                </h3>
                <p className="info">

                </p>
            </div>
            </div>
        </div>
    );
  }
}

export default Contact;
