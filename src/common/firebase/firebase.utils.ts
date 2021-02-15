import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyB0_lS3Tp98ZT04Voz3xAYIe6_KdLWt0zs",
  authDomain: "crwn-clothing-bc28d.firebaseapp.com",
  projectId: "crwn-clothing-bc28d",
  storageBucket: "crwn-clothing-bc28d.appspot.com",
  messagingSenderId: "446840177368",
  appId: "1:446840177368:web:e67396f97fddc26bde8dad",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
