'use client';

import { Search } from 'lucide-react';
import { useProjects } from '../../hooks/useProject';

export const ControlsSection = () => {
	const { search, setSearch, activeTab, setActiveTab, categories } =
		useProjects();
	return (
		<div className='flex flex-col lg:flex-row justify-between gap-6'>
			<div className='w-full lg:w-1/3 relative group'>
				<div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-500 dark:text-slate-400 group-focus-within:text-primary transition-colors'>
					<Search size={20} />
				</div>
				<input
					className='block w-full h-12 pl-10 pr-3 py-2 border-none rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary shadow-sm'
					placeholder='Search projects...'
					type='text'
					value={search}
					onChange={(e) => setSearch(e.target.value)}
				/>
			</div>

			<div className='flex flex-wrap gap-2 lg:justify-end'>
				{categories.map((tab) => (
					<button
						type='button'
						key={tab}
						onClick={() => setActiveTab(tab)}
						className={`px-4 h-10 rounded-lg text-sm font-medium transition-all ${
							activeTab === tab
								? 'bg-primary text-white shadow-md shadow-primary/20'
								: 'bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-700'
						}`}
					>
						{tab}
					</button>
				))}
			</div>
		</div>
	);
};
