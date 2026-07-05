import { AboutMe } from '@/features/home/sections/about';
import { ContactSection } from '../features/home/sections/contacts';
import { ExperienceSection } from '../features/home/sections/experience';
import { HeroSection } from '../features/home/sections/hero';
import { FeatureProjects } from '../features/home/sections/projects';
import { SkillsSection } from '../features/home/sections/skills';

export default function Home() {
	return (
		<main className='flex-grow'>
			{/* Hero Section */}
			<HeroSection />

			{/* About me section */}
			<AboutMe />

			{/* Skills Section */}
			<SkillsSection />

			{/* Featured Projects */}
			<FeatureProjects />

			{/* Experience Section */}
			<ExperienceSection />

			{/* Contact Section */}
			<ContactSection />
		</main>
	);
}
