import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import { User } from "../interfaces/user";

const config = {
  apiKey: "AIzaSyB0_lS3Tp98ZT04Voz3xAYIe6_KdLWt0zs",
  authDomain: "crwn-clothing-bc28d.firebaseapp.com",
  projectId: "crwn-clothing-bc28d",
  storageBucket: "crwn-clothing-bc28d.appspot.com",
  messagingSenderId: "446840177368",
  appId: "1:446840177368:web:e67396f97fddc26bde8dad",
};

export const createUserProfile = async (
  userAuth: User,
  additionalData: any = {}
) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`/users/${userAuth.uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
