// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAyyBL0fKWBRkGTlBJK8dnNn6f65mmKXvo",
  authDomain: "challenge-5494e.firebaseapp.com",
  projectId: "challenge-5494e",
  storageBucket: "challenge-5494e.appspot.com",
  messagingSenderId: "326586531679",
  appId: "1:326586531679:web:e65e7ded6d4d29c75f40ea",
  measurementId: "G-K7C8XMR5ZS",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
