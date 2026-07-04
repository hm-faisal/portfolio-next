import { MainContent } from './components/Main';
import { PortfolioImage } from './components/Portfolio-img';

export const HeroSection = () => {
	return (
		<section className='relative py-20 lg:py-32 overflow-hidden' id='home'>
			{/* Background Glow */}
			<div className='absolute top-0 right-0 -translate-y-12 translate-x-12 w-96 h-96 bg-primary/20 rounded-full blur-3xl pointer-events-none opacity-50'></div>
			<div className='max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
				<div className='flex flex-col lg:flex-row gap-12 items-center'>
					<MainContent />
					<PortfolioImage />
				</div>
			</div>
		</section>
	);
};
