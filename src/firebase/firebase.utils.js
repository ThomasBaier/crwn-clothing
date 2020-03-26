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


export const createUserProfileDocument = async ( userAuth, additionalData ) => {
 if (!userAuth) return;
 const userRef = firestore.doc(`users/${userAuth.uid}`);
    console.log(userRef)
 const snapShot = await userRef.get();
 // DocumentRef you can use crud methods  :returns a documentSnapshot obj
 // CollectionRef can be .add() to DocumtentRef :returns querySnapshot

 if(!snapShot.exists){
    const {displayName, email } = userAuth;
    const createdAt = new Date();
    try {
        await userRef.set({
            displayName,
            email,
            createdAt,
            ...additionalData
        })
    } catch (e) {
        console.log('error creating user', e.message);
    }
    console.log('createUserProfilDocument', userRef);
   
 }


 return userRef;
}





export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({promt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
