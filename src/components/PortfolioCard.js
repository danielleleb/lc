import React, { Component } from 'react';
import '../scss/portfolio-card.scss';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'


library.add(fab);

const CardTag = (props) => {
    return (
        <div className="card__tech--item">
            {props.value}
        </div>
    )
};

class PortfolioCard extends Component {
    render() {
        const techs = [];
        for (let i = 0; i < this.props.technologies.length; i++) {
            techs.push(<CardTag value={this.props.technologies[i]}/>)
        }
        return (
            <div className="portfolio__card card">

                <h3 className="card__title">
                    {this.props.title}
                </h3>
                <p className="card__desc">
                    {this.props.description}
                </p>
                <p className="card_tech">
                    {techs}
                </p>
                <p className="card__link--container">
                    {this.props.codeLink ?
                        <a href={this.props.codeLink} className="card__link">
                            <FontAwesomeIcon icon={['fab', 'codepen']}/>
                        </a> : '' }

                    {this.props.liveLink ?
                        <a href={this.props.liveLink} className="card__link">
                            See it live
                        </a> : '' }
                </p>

            </div>
        );
    }
}

export default PortfolioCard;