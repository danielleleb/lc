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
                    {/*<div className="left">*/}
                        {/*<div className="title">*/}
                            {/*About Me*/}
                        {/*</div>*/}
                        {/*<div className="about__image">*/}

                        {/*</div>*/}
                    {/*</div>*/}
                    {/*<div className='info'>*/}
                    <h3>About Me</h3>
                        <p>
                            I'm Danielle.
                        </p>
                    <br/>
                        <p>
                        As a web developer currently employed at&nbsp;
                            <a className='link--secondary' href='/'>
                                <span></span>
                                <p>
                                    creating-web
                                </p>
                            </a> in Barcelona, I get to spend my days working on interesting projects while honing my HTML/Sass/PHP/Javascript/Pimcore skills.
                        </p>
                    <br/>
                        <p>
                            I also have experience with React, Angular2, Express and Node.
                        </p>
                    <br/>
                        <p>
                            Check out my&nbsp;
                            <a href="https://codepen.io/danielleleb/" className="link--secondary">
                                <span></span>
                                <p>
                                    Codepen
                                </p>
                            </a> and&nbsp;
                            <a href="https://github.com/danielleleb" className="link--secondary">
                                <span></span>
                                <p>
                                    Github
                                </p>
                            </a> profiles to see what I'm up to.
                        </p>
                    <br/>
                        <p>
                            I'm always looking to get involved in new freelance projects, so feel free to&nbsp;
                            <a href="mailto:danielleleb12@gmail.com" className="link--secondary">
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
