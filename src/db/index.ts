import { db as firestore } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';

export const db = {
  posts: firestore.collection('posts'),
  tasks: firestore.collection('tasks'),
};

export interface Post {
  author: string;
  body: string;
  id: string;
  imageUrl: string | null;
  subtitle: string | null;
  title: string;
}

export interface Task {
  assignee: string | null;
  completed: boolean;
  description: string;
  dueBy: string | null;
  title: string;
}

export const getPosts = async () => {
  try {
    const { docs } = await db.posts.get();

    return docs.map(doc => {
      const docData = doc.data() as Post;
      const id = doc.id;

      return {
        ...docData,
        id,
      };
    });
  } catch (e) {
    console.error('Error fetching posts:', e);
  }
};


export const getTasks = async () => {
  try {
    const { docs } = await db.tasks.get();

    return docs.map(doc => doc.data() as Post);
  } catch (e) {
    console.error('Error fetching tasks:', e);
  }
};
