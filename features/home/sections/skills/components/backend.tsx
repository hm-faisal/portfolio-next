const BackendSkillsList = ['Node.js', 'Nest.js', 'PostgreSQL', 'MongoDB'];

export const BackendSkills = () => {
	return (
		<div className='bg-white dark:bg-card-dark p-6 rounded-xl shadow-sm border border-slate-200 dark:border-card-border hover:border-primary/50 transition-colors group'>
			<div className='w-12 h-12 rounded-lg bg-green-500/10 flex items-center justify-center text-green-500 mb-4 group-hover:bg-green-500 group-hover:text-white transition-colors'>
				<span className='material-symbols-outlined'>dns</span>
			</div>
			<h3 className='text-xl font-bold text-slate-900 dark:text-white mb-4'>
				Backend
			</h3>
			<ul className='space-y-3'>
				{BackendSkillsList.map((skill) => (
					<li
						key={skill}
						className='flex items-center gap-2 text-slate-600 dark:text-slate-300'
					>
						<span className='w-1.5 h-1.5 rounded-full bg-green-500'></span>{' '}
						{skill}
					</li>
				))}
			</ul>
		</div>
	);
};
