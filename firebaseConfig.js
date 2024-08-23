import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDFffIS9DtLKslQ52iJxTfEVhaINDzAklo",
  authDomain: "auth-firebase-matheus-aula1.firebaseapp.com",
  projectId: "auth-firebase-matheus-aula1",
  storageBucket: "auth-firebase-matheus-aula1.appspot.com",
  messagingSenderId: "455780683050",
  appId: "1:455780683050:web:0999ad8c1299a45000e253",
  measurementId: "G-F7RZDD9SRL"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export default app;