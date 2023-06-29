import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/database";
import "firebase/compat/auth";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDgu_hBKCJww47nltEZXL7xYwXN6ZVgb2o",
  authDomain: "events-app-licenta.firebaseapp.com",
  projectId: "events-app-licenta",
  storageBucket: "events-app-licenta.appspot.com",
  messagingSenderId: "389070537227",
  appId: "1:389070537227:web:dddc66fc5d38e9dfc67d0e",
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;
