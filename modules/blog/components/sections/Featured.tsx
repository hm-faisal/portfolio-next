'use client';

import { useBlog } from '@/modules/blog/hooks/useBlog';
import { FeaturedPostCard } from '../cards/FeaturedPost';

export const FeaturedSection = () => {
	const { featuredPost } = useBlog();
	return (
		<>
			{featuredPost && (
				<div className='mb-10'>
					<FeaturedPostCard post={featuredPost} />
				</div>
			)}
		</>
	);
};
