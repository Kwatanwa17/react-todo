import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
require('dotenv').config();

// TODO: add env variables
export const config = {
  // apiKey: process.env.REACT_API_KEY,
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: 'todos-8fa8e.firebaseapp.com',
  databaseURL: 'https://todos-8fa8e.firebaseio.com',
  projectId: 'todos-8fa8e',
  storageBucket: 'todos-8fa8e.appspot.com',
  messagingSenderId: '405406911174',
  appId: '1:405406911174:web:ee7d62491289381ef725c7',
};

firebase.initializeApp(config);
firebase.firestore();

console.log(process.env.REACT_API_KEY);
export default firebase;
