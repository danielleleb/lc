import React, { Component } from 'react';
import PortfolioCard from './PortfolioCard';
import '../scss/Portfolio.scss';


const projects = [
    {
        "title": "SpotFinding",
        "description": "Created as an Ironhack Web Development final project, SpotFinding is like Airbnb for sports equipment.",
        "technologies": ["Angular", "MongoDB", "Express"],
        "codeLink": "https://github.com/",
        "liveLink": "https://github.com/"
    },
    {
        "title": "another",
        "description": "Created as an Ironhack Web Development final project, another is like Airbnb for sports equipment.",
        "technologies": ["Angular", "MongoDB", "Express"],
        "codeLink": "https://github.com/",
        "liveLink": "https://github.com/"
    },
    {
        "title": "three",
        "description": "Created as an Ironhack Web Development final project, another is like Airbnb for sports equipment.",
        "technologies": ["Angular", "MongoDB", "Express"],
        "codeLink": "https://github.com/",
        "liveLink": "https://github.com/"
    },
    {
        "title": "four",
        "description": "Created as an Ironhack Web Development final project, another is like Airbnb for sports equipment.",
        "technologies": ["Angular", "MongoDB", "Express"],
        "liveLink": "https://github.com/"
    }
];

class Portfolio extends Component {
  render() {
      const elements = [];

      for (let i = 0; i < projects.length; i++) {
          let project = projects[i];
          elements.push(<PortfolioCard title={project.title}
          description={project.description}
          codeLink={project.codeLink}
          liveLink={project.liveLink}
          technologies={project.technologies}/>)
      }

    return (
        <div className="portfolio">

            <div className="background"></div>
            <div className="container">
                {elements}

            </div>
        </div>
    );
  }
}

export default Portfolio;