import { initializeApp, cert, getApps } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { getStorage } from 'firebase-admin/storage';

// Initialize Firebase
const serviceAccount = require('../../service-account.json');

if (!getApps().length) {
  initializeApp({
    credential: cert(serviceAccount),
    storageBucket: 'randytsao-me.appspot.com',
  });
}

export const bucket = getStorage().bucket();

export const db = getFirestore();
