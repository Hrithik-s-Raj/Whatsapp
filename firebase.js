import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAzv1H05yKATgJQeq2LyjuyvcW4pnI8DyY",
  authDomain: "whatsapp-clone-1e8bc.firebaseapp.com",
  projectId: "whatsapp-clone-1e8bc",
  storageBucket: "whatsapp-clone-1e8bc.appspot.com",
  messagingSenderId: "1084583999817",
  appId: "1:1084583999817:web:9a068c996484e70a94c298",
  measurementId: "G-HNGSJ93XRF",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

const auth = app.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
