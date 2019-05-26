import React, { Component } from 'react';
import '../scss/portfolio-card.scss';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'


library.add(fab);

const CardTag = (props) => {
    return (
        <span className="card__tech--item">
            {props.value}
        </span>
    )
};

function projectImage (props) {
    return (
        <div className="image"></div>
    )
}

class PortfolioCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hovered: false
        }
    }
    render() {
        const techs = [];
        if (this.props.technologies) {
            for (let i = 0; i < this.props.technologies.length; i++) {
                techs.push(<CardTag value={this.props.technologies[i]} key={i}/>)
            }
        }

        const imageStyle = {
            backgroundImage: 'url(' + this.props.image + ')'
        };

        return (
            <div className={"card " + (this.props.image ? '' : 'card--no-image') }>

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
                        <div className="card__link--container">
                            {this.props.codeLink ?
                                <a href={this.props.codeLink} target="_blank" className={"card__link " }>
                                    <FontAwesomeIcon icon={['fab', 'github']}/>
                                </a> : <span></span> }

                            {this.props.liveLink ?
                                <a href={this.props.liveLink} target="_blank" className="card__link card__link--text">
                                    <span className="card__link--background"></span>
                                    <p>
                                        See it live
                                    </p>
                                </a> : '' }
                        </div>
                    </div>

            </div>
        );
    }
}

export default PortfolioCard;