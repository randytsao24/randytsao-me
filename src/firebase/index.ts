import { initializeApp, getApps, FirebaseApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// Initialize Firebase
const serviceAccount = require('../../service-account.json');

let app;

if (!getApps().length) {
  app = initializeApp({
    apiKey: process.env.FIREBASE_API_KEY,
    appId: process.env.FIREBASE_APP_ID,
    projectId: 'randytsao-me',
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    storageBucket: 'randytsao-me.appspot.com', // TODO: Figure out why env var isnt casting
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID,
  });
}

export const db = getFirestore(app as FirebaseApp);
export const storage = getStorage(app);
