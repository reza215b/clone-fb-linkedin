// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyB3AbVRsB4JCgao6a4n0r7POTzqmfOml8w",
  authDomain: "workinrpl.firebaseapp.com",
  projectId: "workinrpl",
  storageBucket: "workinrpl.appspot.com",
  messagingSenderId: "832368866522",
  appId: "1:832368866522:web:f7f05fc2fe6d0a421361e3",
  measurementId: "G-0D43753BXG"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();


export { db, auth };