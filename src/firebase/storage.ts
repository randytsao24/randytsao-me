import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';

import { storage } from './index';

export const uploadImage = async (imageFile: File) => {
  const storageRef = ref(storage, `/posts/${imageFile.name}`);

  try {
    const { metadata, ref } = await uploadBytes(storageRef, imageFile)
    const downloadUrl = await getDownloadURL(ref);
    
    return {
      downloadUrl,
    };
  } catch (e) {
    console.error('Error uploading file to Firebase:', e);
  }
}
