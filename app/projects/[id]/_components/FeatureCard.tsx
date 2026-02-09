export function FeatureCard({
	icon,
	title,
	desc,
}: {
	icon: string;
	title: string;
	desc: string;
}) {
	return (
		<div className='p-6 rounded-xl bg-white dark:bg-card-dark border border-slate-200 dark:border-slate-800 hover:border-primary/50 transition-colors group'>
			<div className='size-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors'>
				<span className='material-symbols-outlined text-primary text-2xl'>
					{icon}
				</span>
			</div>
			<h3 className='text-lg font-bold mb-2 text-slate-900 dark:text-white'>
				{title}
			</h3>
			<p className='text-slate-600 dark:text-slate-400 text-sm leading-relaxed'>
				{desc}
			</p>
		</div>
	);
}
