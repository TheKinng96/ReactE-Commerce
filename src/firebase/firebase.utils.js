import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDx_ZZt2XJ0XER_PLIq3DKHafmQFnO44A8",
  authDomain: "kinngstore-7c58c.firebaseapp.com",
  databaseURL: "https://kinngstore-7c58c.firebaseio.com",
  projectId: "kinngstore-7c58c",
  storageBucket: "kinngstore-7c58c.appspot.com",
  messagingSenderId: "864737343933",
  appId: "1:864737343933:web:51c9eef2571bfe22813ad4",
  measurementId: "G-787DT5B2M3"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exist) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    }catch (error){
      console.log('error creating user', error.message);
    }
  } 
  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;