export const HeaderSection = () => {
	return (
		<div className='flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-slate-200 dark:border-slate-800 pb-8'>
			<div className='flex flex-col gap-3 max-w-2xl'>
				<h1 className='text-4xl md:text-5xl font-black leading-tight tracking-tight text-slate-900 dark:text-white'>
					All Projects
				</h1>
				<p className='text-slate-500 dark:text-slate-400 text-lg font-normal leading-relaxed'>
					A curated collection of my work, ranging from complex web applications
					and robust APIs to experimental frontend designs.
				</p>
			</div>
		</div>
	);
};
