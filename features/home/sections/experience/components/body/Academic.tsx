import { TimelineItem } from '../Timeline';

export const AcademicBody = () => {
	return (
		<div className='relative pl-8 border-l border-slate-300 dark:border-slate-700 space-y-10'>
			<TimelineItem
				title='Complete Web development'
				period='July 2024 - December 2024'
				company='Programming Hero'
				description='Specialized in Web development. Completed 10+ projects. Work with latest technologies.'
			/>
		</div>
	);
};
