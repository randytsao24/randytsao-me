'use client';

import { ReactElement, useRef } from "react";

import Button from "./Button";
import { addPost, Post } from "@/db";
import { uploadImage } from "@/firebase/storage";

interface PostFormProps {
  handleSubmit?: () => void;
}

interface PostAttribute {
  display: string;
  inputEl: ReactElement;
  key: string;
}

interface PostPayload {
  title: string;
  subtitle: string;
  author: string;
  body: string;
  imageUrl: string;
}

const attributes: PostAttribute[] = [
  {
    display: 'Title',
    key: 'form-title',
    inputEl: (
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="form-title" type="text" />
    ),
  },
  {
    display:' Subtitle',
    key: 'form-subtitle',
    inputEl: (
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="form-subtitle" type="text" />
    ),
  },
  {
    display: 'Author',
    key: 'form-author',
    inputEl: (
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="form-author" type="text" />
    ),
  },
  {
    display: 'Body',
    key: 'form-body',
    inputEl: (
      <textarea className="resize rounded-md appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="form-body"></textarea>
    ),
  },
  {
    display: 'Image',
    key: 'form-image',
    inputEl: (
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="form-image-input" type="file" />
    ),
  },
]

export default function PostForm({ handleSubmit }: PostFormProps) {
  const handleSubmitBtnClick = async () => {
    const form = document.getElementById('add-post-form');
    const postPayload = {} as any;

    // Get input text data
    if (form) {
      for (const child of form.children) {
        const key = child.getElementsByTagName('label')[0]?.htmlFor;

        if (key) {
          const tagName = key === 'form-body' ? 'textarea' : 'input';
          const [ input ] = child.getElementsByTagName(tagName);

          if (input?.value && key !== 'form-image') {
            const [ , attribute ] = key.split('form-');

            postPayload[attribute] =  input.value;
          }
        }
      }
    }

    // Upload image to Firebase and get download URL
    const fileInput = document.getElementById('form-image-input') as HTMLInputElement;

    // @ts-ignore
    if (fileInput?.files?.length && fileInput.files[0].name) {
      const [ imageFile ] = fileInput.files;
      const imageUploadRes = await uploadImage(imageFile);

      if (imageUploadRes) {
        const { downloadUrl } = imageUploadRes;

        postPayload.imageUrl = downloadUrl;
      }
    }

    // Write to Firestore with post data
    await addPost(postPayload);
    
    if (handleSubmit) {
      handleSubmit();
    }
  };

  return (
    // <form className="m-4 w-full max-w-lg" onSubmit={handlePostSubmit}>
    <form className="m-4 w-full max-w-lg" id='add-post-form'>
      {
        attributes.map(attribute => (
          <div key={`${attribute.key}-field`} className="flex flex-row mx-3 mb-6">
            <div className="w-full px-3">
              <label className="block tracking-wide text-gray-700 text-md font-bold mb-2" htmlFor={`${attribute.key}`}>
                {attribute.display}
              </label>
              {attribute.inputEl}
            </div>
          </div>
        ))
      }
      <div className='flex flex-row justify-center'>
        <Button
          onClick={handleSubmitBtnClick}
          text='Submit!'
          type='button'
        />
      </div>
    </form>
  );
}
