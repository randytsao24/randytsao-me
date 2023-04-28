import { addDoc, collection, getDocs } from 'firebase/firestore';
import { db as firestore } from '../firebase';

export const db = {
  posts: collection(firestore, 'posts'),
  tasks: collection(firestore, 'tasks'),
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
    const { docs } = await getDocs(db.posts);

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

export const addPost = async (postPayload: Post) => {
  try {
    const postRef = await addDoc(collection(firestore, "posts"), postPayload);

    return postRef;
  } catch (e) {
    console.error('Error adding new post:', e);
  }
};

export const getTasks = async () => {
  try {
    const { docs } = await getDocs(db.tasks);

    return docs.map(doc => doc.data() as Post);
  } catch (e) {
    console.error('Error fetching tasks:', e);
  }
};
