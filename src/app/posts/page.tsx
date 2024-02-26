import Link from 'next/link';

import PostsList from "@/components/PostsList";
import Button from "@/components/Button";
import { getPosts } from "@/db";

export default async function Posts() {
  const posts = await getPosts();
  const isLocalEnv = process.env.NODE_ENV === 'development';

  return (
    <div className='max-w-6xl my-6 mx-auto py-4 flex flex-col items-center space-x-4 bg-zinc-50 border-2 border-stone-200 rounded-xl shadow-lg opacity-75'>
      <div className='px-6 flex flex-row justify-between w-full'>
        <h1 className="text-3xl font-bold underline">
          Posts
        </h1>
        {isLocalEnv && (
          <Link href='/posts/new'>
            <Button text='+ NEW' />
          </Link>
        )}
      </div>
      <PostsList posts={posts || []} />
    </div>
  )
}
