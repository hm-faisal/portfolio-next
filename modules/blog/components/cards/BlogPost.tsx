import { ArrowRight, Calendar, Clock, Link } from 'lucide-react';
import type { BlogPost } from '../../types';

export const BlogPostCard = ({ post }: { post: BlogPost }) => {
	return (
		<article className='flex flex-col group h-full bg-white dark:bg-card-dark rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1'>
			<div className='h-48 overflow-hidden relative'>
				<div className='absolute top-3 left-3 z-10'>
					<span className='bg-black/50 backdrop-blur-sm text-white text-xs font-semibold px-2 py-1 rounded border border-white/10'>
						{post.category}
					</span>
				</div>
				<div
					className='w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110'
					style={{ backgroundImage: `url('${post.image}')` }}
				></div>
			</div>
			<div className='flex flex-col flex-1 p-5 gap-3'>
				<div className='flex items-center gap-2 text-xs text-slate-500'>
					<Calendar size={12} />
					<span>{post.date}</span>
					<span>•</span>
					<Clock size={12} />
					<span>{post.readTime}</span>
				</div>
				<h3 className='text-xl font-bold text-slate-900 dark:text-white leading-tight group-hover:text-primary transition-colors'>
					{post.title}
				</h3>
				<p className='text-slate-600 dark:text-slate-400 text-sm line-clamp-3 flex-1'>
					{post.excerpt}
				</p>
				<div className='mt-2 pt-4 border-t border-gray-100 dark:border-gray-700'>
					<Link
						href={`/blog/${post.id}`}
						className='text-sm font-medium text-primary flex items-center gap-1 group/read'
					>
						Read more{' '}
						<ArrowRight
							size={14}
							className='transition-transform group-hover/read:translate-x-1'
						/>
					</Link>
				</div>
			</div>
		</article>
	);
};
