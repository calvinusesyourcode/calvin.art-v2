import Link from 'next/link';
import Image from 'next/image';
import { format } from 'date-fns';
import { ProjectLength, Tags, ProjectSize } from '@/components/MyPageComponents';

export default function PostFeed({ posts, admin }) {
  return posts ? posts.map((post) => <PostItem post={post} key={post.slug} admin={admin} />) : null;
}

function PostItem({ post, admin = false }) {
  // Naive method to calc word count and read time
  const wordCount = post?.content.trim().split(/\s+/g).length;
  const minutesToRead = (wordCount / 100 + 1).toFixed(0);
  const primaryImage = post?.images[0]
  const tags = post?.tags.join(", ")
  const createdAt = typeof post?.createdAt === 'number' ? new Date(post.createdAt) : post.createdAt.toDate();
  const formattedDate = format(createdAt, 'MMMM dd, yyyy');
  const duration = post?.duration ? post.duration : null
  const size = post?.size ? post.size : null

  return (
    <Link legacyBehavior className='pointer' href={`/${post.username}/${post.slug}`}>
      <div className="project-card hover active" >
          <Image width='200' height='200' className="card-image fit-cover" src={`${primaryImage}`} alt='project photo' />
        <div className='card-body'>
          <span className='card-tags'>{formattedDate}</span>

          <h2>
            <a>{post.title}</a>
          </h2>

        <footer>
          <div className='simple-flex f-start2 gap-tiny no-pad wrap'>
            
          {tags && <Tags tags={tags} />}
          {size && <ProjectSize size={size} />}
          {duration && <ProjectLength duration={duration} />}
          </div>
        </footer>
        </div>
      </div>
    </Link>
  );
}
