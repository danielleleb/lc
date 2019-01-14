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
                {/*<div className="title">*/}
                    Contact
                <br/>
                <br/>
                {/*</div>*/}
                {/*<div className="info">*/}
                    Like my projects?
                    Wanna chat? <br/>
                <br/>
                    Connect with me on
                    <a href="" className={"link--secondary"}>
                        <span></span>
                        <p> LinkedIn </p>
                    </a>
                     or
                    <a href="" className={"link--secondary"}>
                        <span></span>
                        <p> send me an email. </p>
                    </a>
                {/*</div>*/}
            </div>
            </div>
        </div>
    );
  }
}

export default Contact;