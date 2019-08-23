import {createReducer} from './reducerUtils'
import { combineReducers } from "redux";
import { firebaseReducer } from "react-redux-firebase";
import {firestoreReducer} from 'redux-firestore';
import { FETCH_CARDS } from '../actions/cardsConstants';

const initialState = [];

const fetchCards = (state, payload) => {
    return payload.cards;
}
const cardReducer = createReducer(initialState, {
    [FETCH_CARDS]: fetchCards
})
const rootReducer = combineReducers({
    firebase: firebaseReducer,
    firestore: firestoreReducer,
    cards: cardReducer
})
export default rootReducer;