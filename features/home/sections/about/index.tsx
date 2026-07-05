import { AboutMeImage } from './components/AboutImage';
import { MainContent } from './components/Main';

export const AboutMe = () => {
	return (
		<section id='about' className='relative py-20 lg:py-32 overflow-hidden'>
			<div className='max-w-300 mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
				<div className='inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 border border-primary/20'>
					<span className='material-symbols-outlined text-base'>person</span>
					About Me
				</div>
				<h2 className='text-3xl sm:text-4xl font-black tracking-tight text-slate-900 dark:text-white mb-4'>
					Code That's Built to Last
				</h2>
				<p className='text-slate-500 dark:text-slate-400 mb-12 max-w-2xl'>
					Not just shipping features — living with them.
				</p>

				<div className='flex flex-col lg:flex-row gap-12 items-stretch'>
					<AboutMeImage />
					<MainContent />
				</div>
			</div>
		</section>
	);
};
