import { ContactSection } from '../modules/home/sections/contacts';
import { ExperienceSection } from '../modules/home/sections/experience';
import { HeroSection } from '../modules/home/sections/hero';
import { FeatureProjects } from '../modules/home/sections/projects';
import { SkillsSection } from '../modules/home/sections/skills';

export default function Home() {
	return (
		<main className='flex-grow'>
			{/* Hero Section */}
			<HeroSection />

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
