import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';

export const getTasks = async () => {
    const tasksRef = db.collection('tasks');
    const snapshot = await tasksRef.get();

    return snapshot.docs;
}
