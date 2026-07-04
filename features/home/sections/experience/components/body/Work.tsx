import { TimelineItem } from '../Timeline';

export const WorkExperienceBody = () => {
	return (
		<div className='relative pl-8 border-l border-slate-300 dark:border-slate-700 space-y-10'>
			<TimelineItem
				title='Full-stack Developer Intern'
				period='May 2025 - December 2025'
				company='pxlhut'
				duration='7 Months'
				description='Developing and maintaining full-stack features for client websites. Optimizing database queries for faster load times and collaborating with the design team to implement responsive UI components.'
				isLatest
			/>
		</div>
	);
};
