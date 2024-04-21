// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAr_LCU1OcPjLJXyA47x83zJ_WkbMYY6NU",
  authDomain: "la-hacks-trailquest.firebaseapp.com",
  projectId: "la-hacks-trailquest",
  storageBucket: "la-hacks-trailquest.appspot.com",
  messagingSenderId: "360499151853",
  appId: "1:360499151853:web:ff2f4fb8be73015450dde4",
  measurementId: "G-C74W018MTN"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);
