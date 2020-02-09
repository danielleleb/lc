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
                            I’m currently working as a software developer, as part of a team distributed across 6 different timezones. At the moment, I’m working primarily with React and Node.js, focusing on creating internal company tools and automations.
                        </p>
                        <br/>
                        <p>
                            In addition to my full time job, I’m also an active Mozilla Firefox contributor. More specifically, I’ve been working to add additional features to Firefox’s 
                            <a className='link--secondary' target="_blank" href='https://www.ghacks.net/2019/08/27/firefox-71-has-a-new-certificates-viewer/'>
                                <span></span>
                                <p>
                                new certificate view
                                </p>
                            </a> 
                            . I originally got involved with this project as an intern with Mozilla's Security Engineering team. I’m proud to have worked on this project from the beginning until now - and look forward to adding new features in the future.
                            <br/>
                            <br/>
                            Previously, I was a web developer at&nbsp;
                            <a className='link--secondary' target="_blank" href='https://www.dgtls.com/en'>
                                <span></span>
                                <p>
                                    DGTLS 
                                </p>
                            </a> 
                            &nbsp; in Barcelona, where I spent my days working on interesting projects while honing my (React-Redux-PHP-Javascript-Pimcore) skills.
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
