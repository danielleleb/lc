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

function projectImage (props) {
    return (
        <div className="image"></div>
    )
}

class PortfolioCard extends Component {
    render() {
        const techs = [];
        if (this.props.technologies) {
            for (let i = 0; i < this.props.technologies.length; i++) {
                techs.push(<CardTag value={this.props.technologies[i]}/>)
            }
        }

        const imageStyle = {
            backgroundImage: 'url(' + this.props.image + ')'
        };

        return (
            <div className={"card " + (this.props.image ? '' : 'card--no-image')}>

                {this.props.image &&
                    <div className="card__image-wrapper">
                        <div className="card__image"
                        style={imageStyle}
                        ></div>
                    </div>
                }

                    <div className={"card__text " + (this.props.image ? '' : 'card__text--no-image')}>
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
                                <a href={this.props.codeLink} target="ß_blank" className="card__link">
                                    <FontAwesomeIcon icon={['fab', 'codepen']}/>
                                </a> : '' }

                            {this.props.liveLink ?
                                <a href={this.props.liveLink} className="card__link">
                                    See it live
                                </a> : '' }
                        </p>
                    </div>

            </div>
        );
    }
}

export default PortfolioCard;