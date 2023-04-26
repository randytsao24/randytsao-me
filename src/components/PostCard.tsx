import { Post } from "@/db";

interface PostCardProps {
  post: Post;
}

export default function PostsList({ post }: PostCardProps) {
  return (
    <div key={post.id} className='my-4 px-4 w-full flex flex-row justify-between cursor-pointer'>
      <div className="flex flex-col justify-center">
        <h2 className="mb-4 font-bold">
          {post.title}
        </h2>
        <h3>
          {post.subtitle}
        </h3>
      </div>
      <div className="p-8">
        IMAGE!
      </div>
    </div>
  )
}