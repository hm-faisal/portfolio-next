import { ControlsSection } from './sections/Controls';
import { HeaderSection } from './sections/Header';
import { ProjectsSection } from './sections/Projects';

export const ProjectsPage = () => {
	return (
		<main className='flex-1 flex flex-col items-center py-10 px-6 lg:px-10'>
			<div className='w-full max-w-7xl flex flex-col gap-10'>
				{/* Header Section */}
				<HeaderSection />

				{/* Controls Section */}
				<ControlsSection />

				{/* Grid Section */}
				<ProjectsSection />
			</div>
		</main>
	);
};
