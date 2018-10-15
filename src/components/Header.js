import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../scss/Header.scss';

class Header extends Component {


    constructor() {
        super();
        this.state = {
            height: window.innerHeight,
            width: window.innerWidth
        };
        this.updateDimensions = this.updateDimensions.bind(this);
    }

    updateDimensions() {
        this.setState({
            height: window.innerHeight,
            width: window.innerWidth
        });
    }
    componentDidMount() {
        this.updateCanvas();


    }

    updateCanvas() {
        const self = this;

        const canvas = self.refs.canvas
        const context = self.refs.canvas.getContext("2d")
        canvas.width = self.state.width;
        canvas.height = self.state.height;

        context.globalCompositeOperation='destination-over';

        const maxRadius = 100;
        // const colorArray = [
        //     '#B2ADA8',
        //     '#FFC0A1',
        //     '#FFEE99',
        //     '#363636',
        //     '#CCFFE7'
        //
        // ]
        const colorArray = [
            '#533747',
            '#5f506b',
            '#6a6b83',
            '#76949f',
            '#86bbbd'
        ]

        const mouse = {
            x: undefined,
            y: undefined
        }
        let target;
        //
        // window.addEventListener('mousemove', (event) => {
        //     mouse.x = event.x;
        //     mouse.y = event.y;
        //     target = event.target
        // })

        window.addEventListener('resize', () => {
            this.updateDimensions

            init();
        })


        class Circle {
            constructor(x, y, dx, dy, radius) {
                this.x = x;
                this.y = y;
                this.dx = dx;
                this.dy = dy;
                this.radius = radius;
                this.minRadius = radius;
                this.color = colorArray[Math.floor(Math.random() * colorArray.length)]
            }

            draw() {
                context.beginPath();
                context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
                // context.strokeStyle = 'blue';
                // context.stroke();
                context.fillStyle = this.color
                context.fill();
            }

            update() {
                if (this.x > self.state.width || this.x  < 0) {
                    this.dx = -this.dx;
                }

                if (this.y > self.state.height|| this.y  < 0) {
                    this.dy = -this.dy;
                }
                this.x += this.dx;
                this.y += this.dy;

                // interactivity

                if (mouse.x - this.x < 208 && mouse.x - this.x > -208
                    && mouse.y - this.y < 208 && mouse.y - this.y > -208
                ) {
                    // if (this.dx < maxRadius) {
                    //     this.dx += 1

                //     }
                // } else if (this.radius > this.minRadius) {
                    this.dx += 208;
                    this.dy += 208;
                }

                this.draw();
            }
        }


        let circleArr = []
        function init() {
            circleArr = []

            for (let i = 0; i < 100; i++) {
                const radius = Math.random() * 208 + 100;
                const x = Math.random() * (self.state.width);
                const y = Math.random() * (self.state.height);
                const dx = (Math.random() - .5) ;
                const dy = (Math.random() - .5) ;
                circleArr.push(new Circle(x, y, dx, dy, radius));
                // const circle = new Circle(200, 200, 5, 5, 30);
            }
        }


        function animate() {
            requestAnimationFrame(animate);

            context.clearRect(0,0,self.state.width, self.state.height);

            for (let i = 0; i < circleArr.length; i++) {
                circleArr[i].update();
            }

        }
        init();

        animate();
    }




  render() {
    return (
      <nav className="header">
          <canvas ref="canvas" className="canvas"/>
          <div className="header__left">
            <h4 className="header__item">
                <NavLink to="/" className="header__link"  >Danielle LC</NavLink>
            </h4>
          </div>
          <div className="header__right">
            <h4 className="header__item">
              <NavLink to="/projects" className="header__link" >Projects

              </NavLink>
                <span className="header__hover">
                    <span className="header__half header__half--one"></span>
                    <span className="header__half header__half--two"></span>

                </span>

            </h4>
            <h4 className="header__item">
              <NavLink to="/about" className="header__link" >About</NavLink>
                <span className="header__hover">
                    <span className="header__half header__half--one"></span>
                    <span className="header__half header__half--two"></span>

                </span>

            </h4>
            <h4 className="header__item">
              <NavLink to="/contact" className="header__link" >Contact</NavLink>
                <span className="header__hover">
                    <span className="header__half header__half--one"></span>
                    <span className="header__half header__half--two"></span>

                </span>

            </h4>
          </div>
      </nav>
    );
  }
}

export default Header;
