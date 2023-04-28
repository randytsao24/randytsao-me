'use client';

import { useRouter } from 'next/navigation';

import PostForm from '@/components/PostForm';

export default function Posts() {
  const router = useRouter();

  const handleRedirect = () => {
    router.push('/posts');
  }

  return (
    <div className='max-w-6xl my-6 mx-auto py-4 flex flex-col items-center space-x-4 bg-zinc-50 border-2 border-stone-200 rounded-xl shadow-lg opacity-75'>
      <div className='px-6 flex flex-row justify-between w-full'>
        <h1 className="text-3xl font-bold underline">
          Add new post!
        </h1>
      </div>
      <PostForm handleSubmit={handleRedirect} />
    </div>
  )
}
