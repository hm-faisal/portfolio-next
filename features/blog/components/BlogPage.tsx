import { ControlsSection } from './sections/Controls';
import { FeaturedSection } from './sections/Featured';
import { HeroSection } from './sections/Hero';
import { PostsSection } from './sections/Posts';

export function BlogPage() {
	return (
		<div className='px-4 md:px-40 flex flex-1 justify-center py-5'>
			<div className='layout-content-container flex flex-col max-w-[960px] flex-1'>
				{/* Hero Section */}
				<HeroSection />

				{/* Controls */}
				<ControlsSection />

				{/* Featured Post */}
				<FeaturedSection />

				{/* Grid */}
				<PostsSection />
			</div>
		</div>
	);
}
