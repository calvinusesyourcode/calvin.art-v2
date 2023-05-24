import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import { format } from 'date-fns';

// UI component for main post content
export default function PostContent({ post }) {
  const createdAt = typeof post?.createdAt === 'number' ? new Date(post.createdAt) : post.createdAt.toDate();
  
  const formattedDate = format(createdAt, 'MMMM dd, yyyy');

  return (
    <div className="card">
      <h1>{post?.title}</h1>
      <span className="text-sm">
        Written by{' '}
        <Link legacyBehavior href={`/${post.username}/`}>
          <a className="text-info">@{post.username}</a>
        </Link>{' '}
        on {formattedDate}
      </span>
      <ReactMarkdown>{post?.content}</ReactMarkdown>
    </div>
  );
}