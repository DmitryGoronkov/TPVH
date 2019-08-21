import React, { Component } from 'react'

export default class CardMain extends Component {
    render() {
        let card = {
            role: "a"
        };
        console.log("in render",card.role)
        if (this.props.cards){
            card = {...this.props.cards.find((card) => card.id === this.props.match.params.id)}
        }
        return (
            
            <div>
                Title: {card.role}
            </div>
        )
    }
}
