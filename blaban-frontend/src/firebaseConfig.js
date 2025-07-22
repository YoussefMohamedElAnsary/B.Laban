import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAqWJUMLl6JB_NUNrDmLTWg-NDaOTuPHk8",
  authDomain: "blaban-74d9d.firebaseapp.com",
  databaseURL: "https://blaban-74d9d-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "blaban-74d9d",
  storageBucket: "blaban-74d9d.appspot.com",
  messagingSenderId: "296507610893",
  appId: "1:296507610893:web:1cc89268422ff5e5944244",
  measurementId: "G-BWXX1HKB86"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;