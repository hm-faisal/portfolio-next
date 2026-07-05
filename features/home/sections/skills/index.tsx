import { BackendSkills } from './components/backend';
import { FrontendSkills } from './components/Frontend';
import { SkillsHeader } from './components/Header';
import { ToolsSkills } from './components/tools';

export const SkillsSection = () => {
	return (
		<section className='py-16 bg-slate-50 dark:bg-background-alt'>
			<div className='max-w-300 mx-auto px-4 sm:px-6 lg:px-8'>
				<SkillsHeader />
				<div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
					{/* Frontend */}
					<FrontendSkills />

					{/* Backend */}
					<BackendSkills />

					{/* Tools */}
					<ToolsSkills />
				</div>
			</div>
		</section>
	);
};
