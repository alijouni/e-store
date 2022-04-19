import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyBEwN12U9tLLyr8ykvYU5qOz9fshQgKUTQ",
    authDomain: "e-store-bd380.firebaseapp.com",
    projectId: "e-store-bd380",
    storageBucket: "e-store-bd380.appspot.com",
    messagingSenderId: "846134704268",
    appId: "1:846134704268:web:2e431c0a2dea2024aae3a9",
    measurementId: "G-58KJEYV3QX"
};
  
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;