import Link from 'next/link';
import { ProjectCard } from './cards/Project';
import { SectionHeader } from './headers/SectionHeader';

const Projects = [
	{
		id: 1,
		title: 'E-commerce Platform',
		description:
			'A fully functional e-commerce dashboard with inventory management, order tracking, and sales analytics visualization.',
		tags: ['React', 'Node.js', 'MongoDB'],
		image:
			'https://res.cloudinary.com/djk1mxbvj/image/upload/v1770648513/Screenshot_2026-02-09_at_20-47-49_Home_Dwelling_Haven_fjicuy.png',
		href: '/projects/1',
	},
	{
		id: 2,
		title: 'Task Management App',
		description:
			'Collaborative task manager featuring Kanban boards, real-time updates, and team assignment capabilities.',
		tags: ['Vue.js', 'Firebase', 'Tailwind'],
		image:
			'https://images.unsplash.com/photo-1540350394557-8d14678e7f91?auto=format&fit=crop&q=80&w=800',
		href: '/projects/2',
	},
	{
		id: 3,
		title: 'Real-time Chat Service',
		description:
			'Scalable chat infrastructure supporting thousands of concurrent connections with end-to-end encryption.',
		tags: ['TypeScript', 'Socket.io', 'Redis'],
		image:
			'https://images.unsplash.com/photo-1611746872915-64382b5c76da?auto=format&fit=crop&q=80&w=800',
		href: '/projects/3',
	},
];

export const FeatureProjects = () => {
	return (
		<section className='py-20 relative' id='projects'>
			<div className='absolute top-1/2 left-0 -translate-y-1/2 -translate-x-12 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none'></div>
			<div className='max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
				<SectionHeader />
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
					{Projects.map((project) => (
						<ProjectCard
							key={project.id}
							title={project.title}
							description={project.description}
							tags={project.tags}
							image={project.image}
							href={project.href}
						/>
					))}
				</div>
				<div className='text-center mt-12'>
					<Link
						href='/projects'
						className='inline-flex items-center text-primary font-bold hover:gap-2 transition-all'
					>
						View All Projects{' '}
						<span className='material-symbols-outlined ml-1'>
							arrow_forward
						</span>
					</Link>
				</div>
			</div>
		</section>
	);
};
