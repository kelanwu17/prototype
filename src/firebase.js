// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC21AbQ81AWbx9KZ-CwtgToKbsV8pIQUeg",
  authDomain: "chatapp-e779e.firebaseapp.com",
  projectId: "chatapp-e779e",
  storageBucket: "chatapp-e779e.appspot.com",
  messagingSenderId: "208525483538",
  appId: "1:208525483538:web:399f3c3bce91a29ed502cb",
  measurementId: "G-Q062W04QZZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)