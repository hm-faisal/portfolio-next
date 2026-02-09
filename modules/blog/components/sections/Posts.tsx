'use client';

import { useBlog } from '@/modules/blog/hooks/useBlog';
import { BlogPostCard } from '../cards/BlogPost';

export const PostsSection = () => {
	const { otherPosts } = useBlog();
	return (
		<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12'>
			{otherPosts.map((post) => (
				<BlogPostCard key={post.id} post={post} />
			))}
		</div>
	);
};
