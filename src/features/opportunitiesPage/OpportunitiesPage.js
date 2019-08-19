import React, { Component, Fragment } from 'react'
import Navbar from '../navbar/Navbar';
import Sidebar from '../sidebar/Sidebar';
import initFire from '../firebase.js';
import firebase from 'firebase';
import CardMain from '../CardMain/CardMain';
import {Route} from 'react-router-dom'
import './OpportunitiesPage.scss'
export default class OpportunitiesPage extends Component {
    state = {
        cards: []
    }
    componentDidMount() {
        initFire();
        const events = firebase.database().ref('cards');
        console.log(events);
        events.on('value', (snapshot) => {
            let snap = snapshot.val();
            this.setState({cards: snap});
            console.log(snap);
        })
        
       
    }
    render() {
        return (
            <div className="op-es">
                <Sidebar cards={this.state.cards}/>
                <Route path='/op/:id' render={(props) => <CardMain {...props} cards={this.state.cards}/>}/>
            </div>
        )
    }
}
