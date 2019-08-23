import React, { Component } from 'react'
import './CardMain.scss'
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
export default class CardMain extends Component {
    render() {
        let card = {
            
        };
        if (this.props.cards){
            card = {...this.props.cards.find((card) => card.id === this.props.match.params.id)}
        }
        console.log(card);
        return (
            
            <div className="cardMain">
                <h1>{card.role}</h1>
                <h2>{card.organization}</h2>
                <h3>Website: {card.website}</h3>
                {/* <h3>Deadline: {card.deadline}</h3> */}
                <h3>Duration: {card.duration}</h3>
                <h3>Commitment: {card.commitment}</h3>
                <h3>Location: {card.location}</h3>
                <h3>Keywords: {card.keywords}</h3>
                <div className="description">{ ReactHtmlParser(card.description) }</div>

            </div>
        )
    }
}
