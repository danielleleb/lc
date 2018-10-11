import React, { Component } from 'react';
import '../scss/Footer.scss';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faLinkedin } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'


library.add(fab);

class Footer extends Component {
  render() {
    return (
      <nav className="footer">
        <div className="footer__icons">
            <a href="www.linkedin.com/in/danielleleblanccyr">
                <FontAwesomeIcon icon={['fab', 'linkedin']}/>
            </a>
            <a href="www.linkedin.com/in/danielleleblanccyr">
                <FontAwesomeIcon icon={['fab', 'github']}/>
            </a>
            <a href="www.linkedin.com/in/danielleleblanccyr">
                <FontAwesomeIcon icon={['fab', 'codepen']}/>
            </a>
        </div>
        <div className="footer__name">
            <h3 className="footer__copyright">
                Danielle Leblanc-Cyr
            </h3>
        </div>
      </nav>
    );
  }
}

export default Footer;
