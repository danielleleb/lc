import React, { Component, Fragment } from 'react';
import '../scss/about.scss';
import Link from './Link';

class About extends Component {
  render() {
    return (
        <div className="about">
            <div className="background"></div>
            <div className="container">
                <div className="text">
                    <h3>About Me</h3>
                    <br/>
                        <p>
                            I'm Danielle.
                        </p>
                    <br/>
                        <p>
                            I'm currently working as an intern with Mozilla's Security Engineering team. Over the next few months, I'll be implementing a new certificate viewer in Firefox. At the moment, I'm focusing on Web Components, vanilla Javascript, security and React. I'm also taking the opportunity to learn about encryption and C++.
                        </p>
                        <br/>
                        <p>
                        Previously, I was a web developer at&nbsp;
                            <a className='link--secondary' target="_blank" href='https://www.creating-web.com/de/internet-agentur-referenzen'>
                                <span></span>
                                <p>
                                    creating-web
                                </p>
                            </a> in Barcelona, where I spent my days working on interesting projects while honing my (React-Redux-Immutable.js-PHP-Javascript-Pimcore) skills.
                        </p>
                    <br/>
                        <p>
                            I also have experience with React, Angular2, Express and Node.
                        </p>
                    <br/>
                        <p>
                            Check out my&nbsp;
                            <a href="https://codepen.io/danielleleb/" target="_blank" className="link--secondary">
                                <span></span>
                                <p>
                                    Codepen
                                </p>
                            </a> and&nbsp;
                            <a href="https://github.com/danielleleb" target="_blank" className="link--secondary">
                                <span></span>
                                <p>
                                    Github
                                </p>
                            </a> profiles to see what I'm up to.
                        </p>
                    <br/>
                        <p>
                            I'm always looking to get involved in new freelance projects, so feel free to&nbsp;
                            <a href="mailto:danielleleb12@gmail.com" target="_blank" className="link--secondary">
                                <span></span>
                                <p>
                                get in touch.
                                </p>
                            </a>
                        </p>
                    {/*</div>*/}

                </div>
            </div>
        </div>
    );
  }
}

export default About;
