import Link from 'next/link';

export const ProjectCard = ({
	id,
	title,
	description,
	tags,
	category,
	image,
}: {
	id: number;
	title: string;
	description: string;
	tags: string[];
	category: string;
	image: string;
}) => {
	return (
		<article className='group flex flex-col bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-sm hover:shadow-lg hover:shadow-primary/10 border border-slate-200 dark:border-slate-700 hover:border-primary/50 dark:hover:border-primary/50 transition-all duration-300'>
			<div className='relative h-48 overflow-hidden'>
				<div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 opacity-60'></div>
				<img
					src={image}
					alt={title}
					className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-500'
				/>
				<div className='absolute top-3 right-3 z-20'>
					<span className='bg-black/50 backdrop-blur-sm text-white text-xs font-bold px-2 py-1 rounded border border-white/10'>
						{category}
					</span>
				</div>
			</div>
			<div className='flex flex-col flex-1 p-5 gap-4'>
				<div className='flex-1'>
					<h3 className='text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-primary transition-colors'>
						{title}
					</h3>
					<p className='text-slate-500 dark:text-slate-400 text-sm leading-relaxed line-clamp-2'>
						{description}
					</p>
				</div>
				<div className='flex flex-wrap gap-2 mb-2'>
					{tags.map((tag: string) => (
						<span
							key={tag}
							className='px-2 py-1 rounded bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 text-xs font-medium'
						>
							{tag}
						</span>
					))}
				</div>
				<div className='flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-700'>
					<Link
						href={`/projects/${id}`}
						className='text-slate-500 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors'
					>
						<span className='material-symbols-outlined'>code</span>
					</Link>
					<Link
						href={`/projects/${id}`}
						className='flex items-center gap-2 text-primary text-sm font-bold hover:gap-3 transition-all'
					>
						Project Details{' '}
						<span className='material-symbols-outlined text-lg'>
							arrow_forward
						</span>
					</Link>
				</div>
			</div>
		</article>
	);
};
