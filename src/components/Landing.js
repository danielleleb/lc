import React, { Component } from 'react';
import '../scss/Landing.scss';

class Landing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            initialLoad: true
        }
    }

    componentDidMount() {
        this.setState({
            initialLoad: false
        })
    }
  render() {

    return (
        <div className="landing">

            <div className="background"></div>
            <div className={"container " + (this.state.initialLoad ? 'first-load' : '')}>
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