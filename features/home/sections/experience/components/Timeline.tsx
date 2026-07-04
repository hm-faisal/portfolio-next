export const TimelineItem = ({
	title,
	period,
	company,
	duration,
	description,
	isLatest = false,
}: {
	title: string;
	period: string;
	company: string;
	duration?: string;
	description: string;
	isLatest?: boolean;
}) => {
	return (
		<div className='relative'>
			<span
				className={`absolute -left-[36px] top-0 h-4 w-4 rounded-full border-2 ${
					isLatest ? 'border-primary' : 'border-slate-400 dark:border-slate-600'
				} bg-background-light dark:bg-background-dark`}
			></span>
			<div className='flex flex-col sm:flex-row sm:items-center justify-between mb-2'>
				<h3 className='text-lg font-bold text-slate-900 dark:text-white'>
					{title}
				</h3>
				<span
					className={`text-xs font-medium px-2 py-1 rounded ${
						isLatest
							? 'bg-primary/10 text-primary'
							: 'bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
					} whitespace-nowrap`}
				>
					{period}
				</span>
			</div>
			<div className='text-sm font-semibold text-slate-500 dark:text-slate-400 mb-3'>
				{company} {duration ? `• ${duration}` : ''}
			</div>
			<p className='text-slate-600 dark:text-slate-400 text-sm leading-relaxed'>
				{description}
			</p>
		</div>
	);
};
