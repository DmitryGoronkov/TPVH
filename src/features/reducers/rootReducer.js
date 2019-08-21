import { combineReducers } from "redux";
import { firebaseReducer } from "react-redux-firebase";
import {firestoreReducer} from 'redux-firestore';

const data = {
    data: 42
}

const cardReducer = (state = data) =>{
    return state;
}

const rootReducer = combineReducers({
    firebase: firebaseReducer,
    firestore: firestoreReducer,
    cards: cardReducer
})
export default rootReducer;