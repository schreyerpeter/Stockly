import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const firebaseConfig = {
  apiKey: 'AIzaSyA_6I6pdNNaQ0M4ENW6bT4Xq2qCOWMHd1s',
  authDomain: 'stockly-48f43.firebaseapp.com',
  databaseURL: 'https://stockly-48f43.firebaseio.com',
  projectId: 'stockly-48f43',
  storageBucket: 'stockly-48f43.appspot.com',
  messagingSenderId: '766122554836',
  appId: '1:766122554836:web:0e136c6a0afa9dcb2f1241',
  measurementId: 'G-LEJ0PNSLMT',
};

firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
