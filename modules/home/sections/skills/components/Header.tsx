export const SkillsHeader = () => {
	return (
		<div className='flex flex-col md:flex-row justify-between items-end mb-10 gap-4'>
			<div>
				<h2 className='text-3xl font-bold text-slate-900 dark:text-white mb-2'>
					Technical Proficiency
				</h2>
				<p className='text-slate-600 dark:text-slate-400'>
					My toolbelt for building modern web applications.
				</p>
			</div>
			<div className='h-1 flex-1 bg-card-border rounded-full ml-6 hidden md:block opacity-50'></div>
		</div>
	);
};
