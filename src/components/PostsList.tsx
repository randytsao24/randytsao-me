import { Post } from "@/db";

import PostCard from './PostCard';

interface PostsListProps {
  posts: Post[];
}

export default function PostsList({ posts }: PostsListProps) {
  return (
    <div className='grid grid-cols-1 gap-8 mx-auto w-full'>
      {posts?.map(post =>
        <div key={post.id}>
          <PostCard post={post} />
        </div>
      )}
    </div>
  )
}
