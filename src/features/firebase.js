import firebase from 'firebase';
var firebaseConfig = {
    apiKey: "AIzaSyDsByez9o253v8ZUET_ZyeNhEfuhdJdeCw",
    authDomain: "tpvh-3b1ec.firebaseapp.com",
    databaseURL: "https://tpvh-3b1ec.firebaseio.com",
    projectId: "tpvh-3b1ec",
    storageBucket: "tpvh-3b1ec.appspot.com",
    messagingSenderId: "800035903787",
    appId: "1:800035903787:web:30b886faba8240f1"
};
  // Initialize Firebase
export default function initFire(){
    firebase.initializeApp(firebaseConfig);
}
