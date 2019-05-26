import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../scss/Header.scss';
import Link from './Link';
import daniellesvg from '../media/daniellelc.svg';
import burger from '../media/burger.svg';
import exit from '../media/exit.svg';
import Footer from './Footer';


class Header extends Component {


    constructor() {
        super();
        this.state = {
            burgerOpen: false
        }
    }

  render() {
      const imageStyle = {
          backgroundImage: 'url(' + daniellesvg + ')'
      };

      const handleBurgerClick = () => {
          if (this.state.burgerOpen === false) {
              this.setState({
                  burgerOpen: true
              })
          }
      }

      const handleCloseMenuClick = () => {
          if (this.state.burgerOpen === true) {
              this.setState({
                  burgerOpen: false
              })
          }
      }

    return (
        <div>
          <nav className="header">
              <div className="header__burger">
                  <img onClick={() => handleBurgerClick()} src={burger} alt=""/>
              </div>
              <div className={"header__desktop " + (this.state.burgerOpen === true ? 'header__desktop--open' : '')}>
                  <div className="header__burger--close">
                      <img onClick={() => handleCloseMenuClick()} src={exit} alt=""/>
                  </div>
                  <div className="header__left">
                      <div className="header__item ">
                          <NavLink onClick={() => handleCloseMenuClick()} to="/" className="header__link link"  style={imageStyle}></NavLink>
                      </div>
                  </div>
                  <div className="header__right">
                      <h4 className="header__item">
                          <NavLink onClick={() => handleCloseMenuClick()} to="/projects" className="header__link link" >Projects

                          </NavLink>
                          {/*<Link/>*/}

                      </h4>
                      <h4 className="header__item">
                          <NavLink onClick={() => handleCloseMenuClick()} to="/about" className="header__link link" >About</NavLink>
                          {/*<Link/>*/}


                      </h4>
                      <h4 className="header__item">
                          <NavLink onClick={() => handleCloseMenuClick()} to="/contact" className="header__link link" >Contact</NavLink>
                          {/*<Link/>*/}


                      </h4>
                  </div>
            <Footer/>
              </div>
          </nav>
        </div>
    );
  }
}

export default Header;
