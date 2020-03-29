import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

export const firebaseConfig = {
    apiKey: "AIzaSyBniye4ynMk2EmlQa0gzqk94rm6dhw4z9o",
    authDomain: "raiz-lab.firebaseapp.com",
    databaseURL: "https://raiz-lab.firebaseio.com",
    projectId: "raiz-lab",
    storageBucket: "raiz-lab.appspot.com",
    messagingSenderId: "738670301981",
    appId: "1:738670301981:web:f7e397d5b910971f2a07f4",
    measurementId: "G-KTBEXF1FS5"
  };

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGooglePopUp = () => auth.signInWithPopup(provider);

export default firebase;