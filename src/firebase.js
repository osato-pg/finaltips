import firebase from "firebase";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBnbYRKIBp9sgZPNIa6UisoVUZ6OAEi7YM",
  authDomain: "finaltips-app.firebaseapp.com",
  databaseURL: "https://finaltips-app.firebaseio.com",
  projectId: "finaltips-app",
  storageBucket: "finaltips-app.appspot.com",
  messagingSenderId: "299564817032",
  appId: "1:299564817032:web:d6d80d8c50c60160d79d3d",
  measurementId: "G-YPNQY06PSL"
};

firebase.initializeApp(config);

export default firebase;