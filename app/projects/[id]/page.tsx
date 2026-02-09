import Link from 'next/link';
import { FeatureCard } from './_components/FeatureCard';
import { TechStackCard } from './_components/TechStackCard';

// Mock data finder
const getProject = (id: string) => {
	return {
		id: id,
		title: 'Dwelling Haven',
		type: 'Full Stack',
		period: 'Dec 2024 - Dec 2024',
		description:
			'A comprehensive real estate platform for managing properties, connection between User and real estate owner or agent.',
		overview: `This project addresses the critical need for small to medium-sized real estate businesses to have a unified platform for managing multiple sales channels. The dashboard provides verified properties, user reviews, and a secure payment system for transactions.`,
		techStack: {
			frontend: ['React', 'Tailwind CSS'],
			backend: ['Node.js', 'Express', 'Mongodb'],
			deployment: ['Vercel'],
		},
		image:
			'https://res.cloudinary.com/djk1mxbvj/image/upload/v1770648513/Screenshot_2026-02-09_at_20-47-49_Home_Dwelling_Haven_fjicuy.png',
		github: 'https://github.com/hm-faisal/dwelling-haven',
		liveDemo: 'https://dwellinghaven.vercel.app/',
	};
};

export default function ProjectDetails({ params }: { params: { id: string } }) {
	const project = getProject(params.id);

	return (
		<main className='flex-1'>
			{/* Hero Section */}
			<section className='relative pt-10 pb-16 lg:pt-20 lg:pb-24 overflow-hidden'>
				<div className='absolute top-0 right-0 -mr-20 -mt-20 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] pointer-events-none'></div>
				<div className='max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
					<div className='flex flex-col lg:flex-row gap-12 items-center'>
						<div className='flex-1 flex flex-col gap-6 text-left'>
							<div className='flex items-center gap-3'>
								<span className='px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-bold uppercase tracking-wider'>
									{project.type}
								</span>
								<span className='text-slate-500 dark:text-slate-400 text-sm font-medium'>
									{project.period}
								</span>
							</div>
							<h1 className='text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-tight text-slate-900 dark:text-white'>
								{project.title}
							</h1>
							<p className='text-lg sm:text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl'>
								{project.description}
							</p>
							<div className='flex flex-wrap gap-4 mt-2'>
								<button
									type='button'
									className='flex items-center gap-2 h-12 px-6 rounded-lg bg-primary hover:bg-primary-hover transition-all text-white font-bold shadow-lg shadow-primary/20 transform hover:-translate-y-0.5'
								>
									<span className='material-symbols-outlined text-[20px]'>
										rocket_launch
									</span>
									<Link href={project.liveDemo} target='_blank'>
										Live Demo
									</Link>
								</button>
								<button
									type='button'
									className='flex items-center gap-2 h-12 px-6 rounded-lg border border-slate-300 dark:border-slate-700 hover:border-slate-400 bg-white dark:bg-card-dark text-slate-900 dark:text-white font-bold transition-all transform hover:-translate-y-0.5'
								>
									<span className='material-symbols-outlined text-[20px]'>
										code
									</span>
									<Link href={project.github} target='_blank'>
										GitHub Repository
									</Link>
								</button>
							</div>
						</div>
						<div className='flex-1 w-full max-w-2xl lg:max-w-none'>
							<div className='relative group rounded-xl overflow-hidden shadow-2xl bg-card-dark border border-slate-200 dark:border-slate-800'>
								<img
									src={project.image}
									alt={project.title}
									className='w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105'
								/>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Details Grid */}
			<div className='max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-12'>
				<div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
					<div className='lg:col-span-8 flex flex-col gap-12'>
						<section>
							<h2 className='text-2xl font-bold mb-6 flex items-center gap-3 text-slate-900 dark:text-white'>
								<span className='w-1 h-8 bg-primary rounded-full'></span>
								Project Overview
							</h2>
							<div className='prose prose-lg dark:prose-invert text-slate-600 dark:text-slate-300 max-w-none'>
								{project.overview.split('\n\n').map((p) => (
									<p key={project.id} className='mb-4'>
										{p}
									</p>
								))}
							</div>
						</section>

						<section>
							<h2 className='text-2xl font-bold mb-6 flex items-center gap-3 text-slate-900 dark:text-white'>
								<span className='w-1 h-8 bg-primary rounded-full'></span>
								Key Features
							</h2>
							<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
								<FeatureCard
									icon='analytics'
									title='Real-time Analytics'
									desc='Live data streaming for instant updates.'
								/>
								<FeatureCard
									icon='lock'
									title='Role-Based Auth'
									desc='Secure authentication system with JWT and granular permissions.'
								/>
								<FeatureCard
									icon='payments'
									title='Stripe Payments'
									desc='Seamless integration for handling subscriptions and transactions.'
								/>
								<FeatureCard
									icon='dark_mode'
									title='Custom Themes'
									desc='Persistent dark/light mode toggle for optimal viewing.'
								/>
							</div>
						</section>
					</div>

					<div className='lg:col-span-4'>
						<div className='sticky top-24 flex flex-col gap-6'>
							<TechStackCard stacks={project.techStack} />
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}
