const FrontendSkillsList = [
	'React.js',
	'Next.js',
	'Tailwind CSS',
	'TypeScript',
];

export const FrontendSkills = () => {
	return (
		<div className='bg-white dark:bg-card-dark p-6 rounded-xl shadow-sm border border-slate-200 dark:border-card-border hover:border-primary/50 transition-colors group'>
			<div className='w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-500 mb-4 group-hover:bg-blue-500 group-hover:text-white transition-colors'>
				<span className='material-symbols-outlined'>devices</span>
			</div>
			<h3 className='text-xl font-bold text-slate-900 dark:text-white mb-4'>
				Frontend
			</h3>
			<ul className='space-y-3'>
				{FrontendSkillsList.map((skill) => (
					<li
						key={skill}
						className='flex items-center gap-2 text-slate-600 dark:text-slate-300'
					>
						<span className='w-1.5 h-1.5 rounded-full bg-blue-500'></span>{' '}
						{skill}
					</li>
				))}
			</ul>
		</div>
	);
};
