import { ArrowRight, Link } from 'lucide-react';
import type { Post } from '../../types';

export const FeaturedPostCard = ({ post }: { post: Post }) => {
	return (
		<div className='group relative overflow-hidden rounded-xl bg-white dark:bg-card-dark border border-gray-200 dark:border-gray-800 hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-md'>
			<div className='grid md:grid-cols-2 gap-0'>
				<div className='h-64 md:h-full w-full overflow-hidden relative'>
					<div
						className='h-full w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105'
						style={{ backgroundImage: `url('${post.image}')` }}
					></div>
				</div>
				<div className='p-6 md:p-8 flex flex-col justify-center gap-4'>
					<div className='flex items-center gap-3 text-xs font-semibold uppercase tracking-wider'>
						<span className='text-primary bg-primary/10 px-2 py-1 rounded'>
							Featured
						</span>
						<span className='text-slate-500'>{post.date}</span>
					</div>
					<h3 className='text-2xl md:text-3xl font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors'>
						{post.title}
					</h3>
					<p className='text-slate-600 dark:text-slate-400 line-clamp-3'>
						{post.excerpt}
					</p>
					<div className='pt-2'>
						<Link
							href={`/blog/${post.id}`}
							className='inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-blue-400 transition-colors group/link'
						>
							Read Article
							<ArrowRight
								size={16}
								className='transition-transform group-hover/link:translate-x-1'
							/>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};
