import { createStore, applyMiddleware, compose} from 'redux';
import {reactReduxFirebase, getFirebase} from 'react-redux-firebase';
import {reduxFirestore, getFirestore} from 'redux-firestore';
import rootReducer from '../reducers/rootReducer';
import thunk from 'redux-thunk';
import firebase from '../firebase.js'


export const configureStore = () => {
    const store = createStore(rootReducer, 
    compose(
        applyMiddleware(thunk.withExtraArgument({getFirebase,getFirestore})),
        reduxFirestore(firebase),
        reactReduxFirebase(firebase)
    )
    )
    return store;
}