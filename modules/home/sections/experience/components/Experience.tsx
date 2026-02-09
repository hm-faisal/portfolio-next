import { AcademicExperience } from './experience/Academic';
import { WorkExperience } from './experience/Work';

export const ExperienceSection = () => {
	return (
		<section
			className='py-16 bg-slate-50 dark:bg-background-alt'
			id='experience'
		>
			<div className='max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
					<WorkExperience />
					<AcademicExperience />
				</div>
			</div>
		</section>
	);
};
