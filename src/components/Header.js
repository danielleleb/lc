import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../scss/Header.scss';

class Header extends Component {

 

  handleNavClick = () => {
    const body = document.querySelectorAll('body');
    body.style.backgroundColor = 'red';
  }

  render() {
    return (
      <nav className="header">
          <div className="header__left">
            <h4 className="header__item">
                <NavLink to="/" className="header__link"  >Danielle LC</NavLink>
            </h4>
          </div>
          <div className="header__right">
            <h4 className="header__item">
              <NavLink to="/" className="header__link" >Projects</NavLink>
            </h4>
            <h4 className="header__item">
              <NavLink to="/about" className="header__link" >About</NavLink>
            </h4>
            <h4 className="header__item">
              <NavLink to="/contact" className="header__link" >Contact</NavLink>
            </h4>
          </div>
      </nav>
    );
  }
}

export default Header;
