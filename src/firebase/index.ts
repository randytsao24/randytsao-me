import { initializeApp, getApps, FirebaseApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// Initialize Firebase
let app;

// NOTE: Apparently exposing these values is okay, according to:
// https://firebase.google.com/docs/projects/api-keys#api-keys-for-firebase-are-different
const config = {
  apiKey: 'AIzaSyCEDpTymusBauoW6yUxWg6tcZm_EzKRjx0',
  appId: "1:42039643605:web:1e000eed41b150742cc15c",
  projectId: 'randytsao-me',
  authDomain: "randytsao-me.firebaseapp.com",
  storageBucket: "randytsao-me.appspot.com",
  messagingSenderId: "42039643605",
  measurementId: "G-PSHE0WFYLR",
}

if (!getApps().length) {
  app = initializeApp(config);
}

export const db = getFirestore(app as FirebaseApp);
export const storage = getStorage(app);
