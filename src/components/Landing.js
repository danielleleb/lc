import React, { Component } from 'react';
import '../scss/Landing.scss';

class Landing extends Component {
  render() {
    return (
        <div className="landing">

            <div className="background"></div>
            <div className="container">
                <h2 className="landing__text">
                    Hi, I'm Danielle. <br/>
                    I'm a Canadian web developer currently working in Barcelona.
                </h2>
            </div>
        </div>
    );
  }
}

export default Landing;