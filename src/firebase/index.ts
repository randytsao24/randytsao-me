import { initializeApp, cert, getApps } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';

// Initialize Firebase
const serviceAccount = require('../../service-account.json');

if (!getApps().length) {
  initializeApp({
    credential: cert(serviceAccount)
  });
}

export const db = getFirestore();
