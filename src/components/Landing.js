import React, { Component } from 'react';
import '../scss/Landing.scss';

class Landing extends Component {
  render() {

    return (
        <div className="landing">

            <div className="background"></div>
            <div className="container">
                <div className="text">
                    <h1>Hello</h1>
                    <p>
                        I'm Danielle.
                    </p>
                    <p>
                      I'm a Canadian web developer currently working in Barcelona.
                    </p>
                </div>
            </div>
        </div>
    );
  }
}

export default Landing;