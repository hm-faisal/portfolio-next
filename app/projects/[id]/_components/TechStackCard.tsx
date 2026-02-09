export function TechStackCard({
	stacks,
}: {
	stacks: {
		[key: string]: string[];
	};
}) {
	return (
		<div className='rounded-xl bg-white dark:bg-card-dark border border-slate-200 dark:border-slate-800 p-6 shadow-sm'>
			<h3 className='text-lg font-bold mb-4 text-slate-900 dark:text-white flex items-center gap-2'>
				<span className='material-symbols-outlined text-primary'>layers</span>
				Tech Stack
			</h3>
			<div className='space-y-4'>
				{Object.entries(stacks).map(([key, items]: [string, string[]]) => (
					<div key={key}>
						<p className='text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2'>
							{key}
						</p>
						<div className='flex flex-wrap gap-2'>
							{items.map((item: string) => (
								<span
									key={item}
									className='px-3 py-1.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-sm font-medium border border-slate-200 dark:border-slate-700'
								>
									{item}
								</span>
							))}
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
