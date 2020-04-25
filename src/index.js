import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import firebase from "firebase";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDCbbnYx-m_nEExBcJH3qY_wHs5ZZvqBIc",
  authDomain: "jfdz13-team2-app.firebaseapp.com",
  databaseURL: "https://jfdz13-team2-app.firebaseio.com",
  projectId: "jfdz13-team2-app",
  storageBucket: "jfdz13-team2-app.appspot.com",
  messagingSenderId: "751417169938",
  appId: "1:751417169938:web:930619a1b7b60f450da0cb",
  measurementId: "G-R5Q1RJBVMY"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
