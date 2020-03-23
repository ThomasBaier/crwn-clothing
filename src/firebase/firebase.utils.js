import firebase from 'firebase/app'
import 'firebase/firestore';
import 'firebase/auth';
const config = {
    apiKey: "AIzaSyBQM9MtboTRBOpYfXFhVieVPnByjMEibVE",
    authDomain: "crwn-db-22497.firebaseapp.com",
    databaseURL: "https://crwn-db-22497.firebaseio.com",
    projectId: "crwn-db-22497",
    storageBucket: "crwn-db-22497.appspot.com",
    messagingSenderId: "773496844122",
    appId: "1:773496844122:web:d78c9042fd4192f2ff0d63"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({promt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
