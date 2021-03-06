import React, { Component } from 'react';
import PortfolioCard from './PortfolioCard';
import '../scss/Portfolio.scss';
import spotfindingImg from "../media/spotfinding.png";
import rentilyImg from '../media/rentily.png';
import danielleImg from '../media/danielle.png';
import quoteImg from '../media/quote-machine.png';
import calculatorImg from '../media/calc.png'
import markdownImg from '../media/markdown.png'



const projects = [
    {
        "title": "SpotFinding",
        "description": "Created as an Ironhack Web Development final project, SpotFinding is like Airbnb for sports equipment.",
        "technologies": ["Angular", "MongoDB", "Express"],
        "codeLink": "https://github.com/rodrigodaoud/project_web",
        "liveLink": "http://spotfinding.herokuapp.com/",
        "image": spotfindingImg
    },

    {
        "title": "Portfolio",
        "description": "Take a look at some of my projects. More can be found on my Codepen and Github accounts.",
    },
    // {
    //     "title": "Pure CSS Charts",
    //     "description": "Three charts created using only CSS (of course with JS functionality for triggering animation). SVG implementation would have been easier, but CSS-only was a good challenge.",
    //     "technologies": ["CSS", "Javascript"],
    //     "liveLink": "https://github.com/",
    //     "image": spotfindingImg
    // },
    {
        "title": "Javascript Calculator",
        "description": "Just in case your phone/computer's built-in calculator is untrustworthy.",
        "technologies": ["React", "Redux"],
        "codeLink": "https://github.com/danielleleb/react-calculator",
        "liveLink": "https://danielleleb.github.io/react-calculator/",
        "image": calculatorImg

    },
    {
        "title": "Rentily",
        "description": "Ironhack module two project - my first foray into using Express.",
        "technologies": ["ExpressJS"],
        "liveLink": "https://rentily.herokuapp.com/",
        "image": rentilyImg
    },
    {
        "title": "Markdown Previewer",
        "description": "Input and instantly display Github-flavoured markdown.",
        "technologies": ["React", "Redux"],
        "codeLink": "https://github.com/danielleleb/markdown-previewer",
        "liveLink": "https://danielleleb.github.io/markdown-previewer/",
        "image": markdownImg

    },
    {
        "title": "Random Quote Generator",
        "description": "Useful if you're looking to read and/or tweet random quotes.",
        "technologies": ["React", "Redux"],
        "codeLink": "https://github.com/danielleleb/quote-machine",
        "liveLink": "https://danielleleb.github.io/quote-machine/",
        "image": quoteImg
    },

    {
        "title": "Command Line Contact Manager",
        "description": "Created as a way to experiment with and understand command line interfaces.",
        "technologies": ["CommanderJS"],
        "codeLink": "https://github.com/danielleleb/contact-manager",
        // "image": spotfindingImg
    },


];

class Portfolio extends Component {
  render() {
      const elements = [];

      for (let i = 0; i < projects.length; i++) {
          let project = projects[i];
          elements.push(<PortfolioCard key={i}
           title={project.title}
           key={i}
           id={i}
          description={project.description}
          codeLink={project.codeLink}
          liveLink={project.liveLink}
          technologies={project.technologies}
          image={project.image}
          />)
      }

    return (
        <div className="portfolio">

            <div className="background"></div>
            <div className="container">
                <div className="portfolio-container">

                {elements}
                </div>

            </div>
        </div>
    );
  }
}

export default Portfolio;