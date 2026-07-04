'use client';

import { useProjects } from '../../hooks/useProject';
import { ProjectCard } from '../cards/ProjectsCard';

export const ProjectsSection = () => {
	const { filteredProjects } = useProjects();
	return (
		<>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
				{filteredProjects.map((project) => (
					<ProjectCard key={project.id} {...project} />
				))}
				;
			</div>

			{filteredProjects.length === 0 && (
				<div className='py-20 text-center text-slate-500 dark:text-slate-400'>
					<p className='text-xl'>No projects found matching your criteria.</p>
				</div>
			)}
		</>
	);
};
