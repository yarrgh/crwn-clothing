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

  return userRef!;
};

firebase.initializeApp(config);

export const addCollectionAndDocuments = async (
  collectionKey: string,
  objectsToAdd: any[]
) => {
  const collectionRef = firestore.collection(collectionKey);
  const batch = firestore.batch();
  objectsToAdd.forEach((obj) => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

  return await batch.commit();
};

export const convertCollectionsSnapshotToMap = (
  collections: firebase.firestore.QuerySnapshot<firebase.firestore.DocumentData>
) => {
  const transformedCollection = collections.docs.map((doc) => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    };
  });

  return transformedCollection.reduce((acc, collection) => {
    acc[collection.title.toLowerCase()] = collection;
    return acc;
  }, {} as { [id: string]: any });
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export const getCurrentUser = (): Promise<User | null> => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      unsubscribe();
      resolve(userAuth as User);
    }, reject);
  });
};

export interface DocumentData extends firebase.firestore.DocumentData {}

export interface DocumentReference<T = DocumentData>
  extends firebase.firestore.DocumentReference<T> {}

export interface DocumentSnapshot<T = DocumentData>
  extends firebase.firestore.DocumentSnapshot<T> {}

export interface UserCredential extends firebase.auth.UserCredential {}

export default firebase;
