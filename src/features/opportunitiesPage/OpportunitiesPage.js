import React, { Component, Fragment } from 'react'
import Navbar from '../navbar/Navbar';
import Sidebar from '../sidebar/Sidebar';
import initFire from '../firebase.js';
import firebase from 'firebase';
import CardMain from '../CardMain/CardMain';
import {Route} from 'react-router-dom'
import {connect} from 'react-redux';
import { getCards } from '../actions/cardsActions'
import './OpportunitiesPage.scss'
import {firestoreConnect} from 'react-redux-firebase';
import {compose} from 'redux';
const  mapStateToProps = (state) => {
   
    return {
    cards: state.cards,
    //loading: state.async.loading
}}
const actions = {
    getCards
}
class OpportunitiesPage extends Component {
    state = {
        cards: []
    }
    componentDidMount(){
        this.props.getCards();
    }
    render() {
        let cards = [];
        if (this.props.cards){
            cards = this.props.cards
        }
        return (
            <div className="op-es">
                <Sidebar cards={cards}/>
                <Route path='/op/:id' render={(props) => 
                                        <CardMain {...props} cards={cards}/>
                }/>
            </div>
        )
    }
}

export default compose(
    connect(mapStateToProps, actions),
    firestoreConnect([{collection: 'cards'}])
)(OpportunitiesPage)
