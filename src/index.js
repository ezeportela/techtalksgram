import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';

import App from './App';
import './index.css';

firebase.initializeApp({
    apiKey: "AIzaSyBAwW3b_pG4AyLgfYx88sZPSY4Zi7XCklw",
    authDomain: "instagram-e7a5b.firebaseapp.com",
    databaseURL: "https://instagram-e7a5b.firebaseio.com",
    projectId: "instagram-e7a5b",
    storageBucket: "instagram-e7a5b.appspot.com",
    messagingSenderId: "621300717096"
});

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
