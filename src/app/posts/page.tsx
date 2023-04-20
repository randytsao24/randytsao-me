import PostsList from "@/components/Postslist"

import { getPosts } from "@/db"

export default async function Posts() {
  const posts = await getPosts();
  
  return (
    <div className='p-6 max-w-6xl my-6 mx-auto flex flex-col items-center space-x-4 bg-zinc-50 border-2 border-stone-200 rounded-xl shadow-lg opacity-75'>
      <h1 className="text-3xl font-bold underline">
        Posts
      </h1>
      <PostsList posts={posts || []} />
    </div>
  )
} 
