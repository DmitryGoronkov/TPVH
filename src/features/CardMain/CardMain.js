import React, { Component } from 'react'

export default class CardMain extends Component {
    render() {
        const card = this.props.cards.find((card) => card.ID === this.props.match.params.id)
        return (
            
            <div>
                Title: {card.MobileName}
            </div>
        )
    }
}
