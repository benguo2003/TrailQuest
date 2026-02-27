// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { initializeAuth, getAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { getFirestore } from "firebase/firestore";

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

let auth;
try {
  auth = initializeAuth(FIREBASE_APP, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
  });
} catch (e) {
  auth = getAuth(FIREBASE_APP);
}
export const FIREBASE_AUTH = auth;

export const FIREBASE_DB = getFirestore(FIREBASE_APP);
export const STORAGE = getStorage(FIREBASE_APP);
