import 'firebase/auth';
import firebase from 'firebase';
import 'firebase/firestore';

let config = {
    apiKey: "AIzaSyB96LapjUlj3PBf3oDxwSteitDGtYNW5Ro",
    authDomain: "p-indi.firebaseapp.com",
    projectId: "p-indi",
    databaseURL: "https://p-indi-default-rtdb.firebaseio.com",
    storageBucket: "p-indi.appspot.com",
    messagingSenderId: "720761999636",
    appId: "1:720761999636:web:6471e55a8806b51fd0f201"
};

firebase.initializeApp(config);
export const provider = new firebase.auth.GoogleAuthProvider();
firebase.firestore();
export default firebase;
