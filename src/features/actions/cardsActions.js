import firebase from '../../features/firebase';
import { FETCH_CARDS } from './cardsConstants';
import { asyncActionStart, asyncActionFinish, asyncActionError } from './asyncActions';

export const getCards = () =>
    async (dispatch, getState) => {
        let today = new Date();
        const firestore = firebase.firestore();
        const cardsQuery = firestore.collection('cards').where('deadline', '>=', today);
        try {
            dispatch(asyncActionStart())
            let querySnap = await cardsQuery.get();
            let cards = [];
            for (let i = 0; i < querySnap.docs.length; i++){
                let card = {...querySnap.docs[i].data(), id: querySnap.docs[i].id};
                cards.push(card);
            }
            dispatch({type: FETCH_CARDS, payload: {cards}})
            dispatch(asyncActionFinish());
        } catch (error) {
            console.log(error)
            dispatch(asyncActionError());
        }
    }
