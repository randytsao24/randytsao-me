import Image from 'next/image';

import { Post } from "@/db";

interface PostCardProps {
  post: Post;
}

export default function PostsList({ post }: PostCardProps) {
  const { createdAt } = post;
  let displayDate = null;

  if (createdAt) {
    const postDate = createdAt.toDate();
    displayDate = postDate
      .toLocaleDateString('en-us', { year: 'numeric', month: 'short', day: 'numeric' });
  }

  return (
    <div key={post.id} className='my-4 px-4 w-full flex flex-row justify-between cursor-pointer'>
      <div className="flex flex-col justify-center">
        <h2 className="mb-4 font-bold">
          {post.title}
        </h2>
        <h3 className='italic'>
          {post.subtitle}
        </h3>
        {}
        <h3 className="mt-4">
          {displayDate}
        </h3>
      </div>
      <div className="p-8">
        {post.imageUrl && (
          <Image
            src={post.imageUrl}
            alt='image related to post'
            width={150}
            height={150}
            loading='lazy'
          />
        )}
      </div>
    </div>
  )
}
