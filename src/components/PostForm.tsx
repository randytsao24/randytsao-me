'use client';

import { ReactElement, useRef } from "react";

import Button from "./Button";
import { Post } from "@/db";

interface PostAttribute {
  display: string;
  inputEl: ReactElement;
  key: string;
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
      <textarea className="resize rounded-md appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="form-body" />
    ),
  },
  {
    display: 'Image',
    key: 'form-image',
    inputEl: (
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="form-image" type="file" />
    ),
  },
]

export default function PostsList() {
  const handlePostSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form as HTMLFormElement);

    // @ts-ignore
    const titleVal = form[0]?.value;
    // @ts-ignore
    const subtitleVal = form[1]?.value;
    // @ts-ignore
    const authorVal = form[2]?.value;
    // @ts-ignore
    const bodyVal = form[3]?.value;
    console.log({titleVal, subtitleVal, authorVal, bodyVal})
  }

  return (
    <form className="m-4 w-full max-w-lg" onSubmit={handlePostSubmit}>
      {
        attributes.map(attribute => (
          <div key={`${attribute.key}-field`} className="flex flex-row -mx-3 mb-6">
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
          text='Submit!'
          type='submit'
        />
      </div>
    </form>
  );
}
