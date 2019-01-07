import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../scss/Header.scss';
import Link from './Link';
import daniellesvg from '../media/daniellelc.svg';

class Header extends Component {


    constructor() {
        super();
        // this.state = {
        //     height: window.innerHeight,
        //     width: window.innerWidth
        // };
        // this.updateDimensions = this.updateDimensions.bind(this);
    }

    updateDimensions() {
        // this.setState({
        //     height: window.innerHeight,
        //     width: window.innerWidth
        // });
    }
    componentDidMount() {
        // this.updateCanvas();


    }

    // updateCanvas() {
    //     const self = this;
    //
    //     const canvas = self.refs.canvas
    //     const context = self.refs.canvas.getContext("2d")
    //     canvas.width = self.state.width;
    //     canvas.height = self.state.height;
    //
    //     context.globalCompositeOperation='destination-over';
    //
    //     const maxRadius = 100;
    //     // const colorArray = [
    //     //     '#B2ADA8',
    //     //     '#FFC0A1',
    //     //     '#FFEE99',
    //     //     '#363636',
    //     //     '#CCFFE7'
    //     //
    //     // ]
    //     // const colorArray = [
    //     //     '#533747',
    //     //     '#5f506b',
    //     //     '#6a6b83',
    //     //     '#76949f',
    //     //     '#86bbbd'
    //     // ]
    //     // const colorArray = [
    //     //     '#1B2021',
    //     //     '#51513d',
    //     //     '#a6a867',
    //     //     '#e3dc95',
    //     //     '#e3dcc2'
    //     // ]
    //
    //     const colorArray = [
    //         '#0A0908',
    //         '#22333B',
    //         '#C6AC8F',
    //         '#5E503F',
    //         '#EAE0D5'
    //     ]
    //
    //     const mouse = {
    //         x: undefined,
    //         y: undefined
    //     }
    //     let target;
    //     //
    //     // window.addEventListener('mousemove', (event) => {
    //     //     mouse.x = event.x;
    //     //     mouse.y = event.y;
    //     //     target = event.target
    //     // })
    //
    //     window.addEventListener('resize', () => {
    //         this.updateDimensions
    //
    //         init();
    //     })
    //
    //
    //     class Circle {
    //         constructor(x, y, dx, dy, radius) {
    //             this.x = x;
    //             this.y = y;
    //             this.dx = dx;
    //             this.dy = dy;
    //             this.radius = radius;
    //             this.minRadius = radius;
    //             this.color = colorArray[Math.floor(Math.random() * colorArray.length)]
    //         }
    //
    //         draw() {
    //             context.beginPath();
    //             context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
    //             // context.strokeStyle = 'blue';
    //             // context.stroke();
    //             context.fillStyle = this.color
    //             context.fill();
    //         }
    //
    //         update() {
    //             if (this.x > self.state.width || this.x  < 0) {
    //                 this.dx = -this.dx;
    //             }
    //
    //             if (this.y > self.state.height|| this.y  < 0) {
    //                 this.dy = -this.dy;
    //             }
    //             this.x += this.dx;
    //             this.y += this.dy;
    //
    //             // interactivity
    //
    //             if (mouse.x - this.x < 50 && mouse.x - this.x > -50
    //                 && mouse.y - this.y < 50 && mouse.y - this.y > -50
    //             ) {
    //                 if (this.radius < maxRadius) {
    //                     this.radius += 1
    //                 }
    //             } else if (this.radius > this.minRadius) {
    //                 this.radius -= 1;
    //             }
    //
    //             this.draw();
    //         }
    //     }
    //
    //
    //     let circleArr = []
    //     function init() {
    //         circleArr = []
    //
    //         for (let i = 0; i < 100; i++) {
    //             const radius = Math.random() * 150 + 100;
    //             const x = Math.random() * (self.state.width);
    //             const y = Math.random() * (self.state.height);
    //             const dx = (Math.random() - .5) ;
    //             const dy = (Math.random() - .5) ;
    //             circleArr.push(new Circle(x, y, dx, dy, radius));
    //             // const circle = new Circle(200, 200, 5, 5, 30);
    //         }
    //     }
    //
    //
    //     function animate() {
    //         requestAnimationFrame(animate);
    //
    //         context.clearRect(0,0,self.state.width, self.state.height);
    //
    //         for (let i = 0; i < circleArr.length; i++) {
    //             circleArr[i].update();
    //         }
    //
    //     }
    //     init();
    //
    //     animate();
    // }




  render() {
      const imageStyle = {
          backgroundImage: 'url(' + daniellesvg + ')'
      };

    return (
      <nav className="header">
          {/*<canvas ref="canvas" className="canvas"/>*/}
          <div className="header__left">
            <p className="header__item link link">
                <NavLink to="/" className="header__link"  style={imageStyle}></NavLink>
            </p>
          </div>
          <div className="header__right">
            <h4 className="header__item link">
              <NavLink to="/projects" className="header__link" >Projects

              </NavLink>
                {/*<Link/>*/}

            </h4>
            <h4 className="header__item link">
              <NavLink to="/about" className="header__link" >About</NavLink>
                {/*<Link/>*/}


            </h4>
            <h4 className="header__item link">
              <NavLink to="/contact" className="header__link" >Contact</NavLink>
                {/*<Link/>*/}


            </h4>
          </div>
      </nav>
    );
  }
}

export default Header;
