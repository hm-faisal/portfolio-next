export const MainContent = () => {
	return (
		<div className='flex-1 text-center lg:text-left flex flex-col justify-center'>
			<p className='text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-8'>
				I write code that's built to last — not just to ship. I own systems
				long-term, thrive in large-scale environments with constant iteration,
				and adopt new technology fast, without sacrificing efficiency. One-off
				script or years-long product — I build it right, the first time.
			</p>

			<div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
				{[
					'Long-term Maintenance',
					'Scalable Systems',
					'Emerging Tech',
					'Efficient Solutions',
				].map((tag) => (
					<div
						key={tag}
						className='px-3 py-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-sm font-medium text-center border border-slate-200 dark:border-slate-700'
					>
						{tag}
					</div>
				))}
			</div>
		</div>
	);
};
