export const HeroSection = () => {
	return (
		<div className='flex flex-col gap-6 py-10'>
			<div className='flex flex-col gap-2'>
				<h1 className='text-4xl md:text-5xl font-black leading-tight tracking-[-0.033em] text-slate-900 dark:text-white'>
					Engineering <span className='text-primary'>Blog</span>
				</h1>
				<p className='text-slate-500 dark:text-slate-400 text-lg font-normal leading-relaxed max-w-2xl'>
					Deep dives into full-stack development, system architecture, and the
					lessons learned building scalable applications.
				</p>
			</div>
		</div>
	);
};
