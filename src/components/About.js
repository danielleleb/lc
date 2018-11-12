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
                    <div className="about__image">

                    </div>
                    <div className='info'>
                        <p>
                            I'm Danielle.
                        </p>
                        <p>
                        As a web developer currently employed at <a className='link' href=''>creating-web <Link/></a> in Barcelona, I get to spend my days working on interesting projects while honing my HTML/Sass/PHP/Javascript/Pimcore skills.
                        </p>
                        <p>
                        When I'm not at the office, you can find me exploring Barcelona, working on freelance projects, or trying out new techologies and courses.
                        </p>
                        <p>
                            Check out my <a href="" className="link">Codepen <Link/></a> and <a href="" className="link">Github <Link/></a> profiles to see what I'm up to (spoiler alert: at the moment, I'm all about React).
                        </p>
                        <p>
                            I'm always looking to get involved in new freelance projects, so feel free to
                            <a href="" className="link"> get in touch.<Link/></a>
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
  }
}

export default About;
