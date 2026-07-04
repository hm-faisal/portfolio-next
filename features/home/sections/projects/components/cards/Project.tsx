import Link from 'next/link';

export const ProjectCard = ({
	title,
	description,
	tags,
	image,
	href,
}: {
	title: string;
	description: string;
	tags: string[];
	image: string;
	href: string;
}) => {
	return (
		<div className='group bg-white dark:bg-card-dark rounded-xl overflow-hidden border border-slate-200 dark:border-card-border hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/5 flex flex-col h-full'>
			<div className='h-48 overflow-hidden relative'>
				<div className='absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all z-10'></div>
				<img
					src={image}
					alt={title}
					className='w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500'
				/>
			</div>
			<div className='p-6 flex flex-col flex-1'>
				<h3 className='text-xl font-bold text-slate-900 dark:text-white mb-2'>
					{title}
				</h3>
				<p className='text-slate-600 dark:text-slate-400 text-sm mb-4 line-clamp-3'>
					{description}
				</p>
				<div className='flex flex-wrap gap-2 mb-6'>
					{tags.map((tag) => (
						<span
							key={tag}
							className='px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs rounded font-medium'
						>
							{tag}
						</span>
					))}
				</div>
				<div className='mt-auto'>
					<Link
						href={href}
						className='inline-flex items-center text-primary text-sm font-bold hover:text-primary-hover transition-colors group/link'
					>
						View Details
						<span className='material-symbols-outlined text-base ml-1 transition-transform group-hover/link:translate-x-1'>
							arrow_forward
						</span>
					</Link>
				</div>
			</div>
		</div>
	);
};
