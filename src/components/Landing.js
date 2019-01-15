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
        setTimeout(() => {
            this.setState({
                initialLoad: false
            })
        }, 10000)
    }

  render() {

    return (
        <div className="landing">

            <div className="background"></div>
            <div className={"container " + (this.state.initialLoad ? 'first-load' : '')}>
                <div className="text">
                    <h3>Hello</h3>
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