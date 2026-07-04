import Link from 'next/link';
import { DiscordIcon } from '@/components/icons/DiscordIcon';
import { LinkedinIcon } from '@/components/icons/LinkedinIcon';

export const MainContent = () => {
	return (
		<div className='flex-1 text-center lg:text-left'>
			<div className='inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 border border-primary/20'>
				<span className='relative flex h-2 w-2'>
					<span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75'></span>
					<span className='relative inline-flex rounded-full h-2 w-2 bg-primary'></span>
				</span>
				Available for hire
			</div>
			<h1 className='text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.1] mb-6'>
				Hello, I'm <br />
				<span className='text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400'>
					A. H. M. Faisal
				</span>
			</h1>
			<p className='text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto lg:mx-0 mb-8 leading-relaxed'>
				A Full-stack Web Developer dedicated to building scalable,
				high-performance web solutions. I turn complex problems into elegant,
				user-centric interfaces.
			</p>
			<div className='flex flex-col sm:flex-row gap-4 justify-center lg:justify-start'>
				<a
					className='inline-flex items-center justify-center h-12 px-6 rounded-lg bg-primary hover:bg-primary-hover text-white font-bold transition-all shadow-lg shadow-primary/25'
					href='#contact'
				>
					Let's work together
				</a>
				<Link
					href='https://drive.google.com/file/d/1q5sb9HQzC9zwZ4R2-VCZYM1C4ZckMQyt/view?usp=sharing'
					className='inline-flex items-center justify-center h-12 px-6 rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-900 dark:text-white font-medium transition-all gap-2'
					type='button'
				>
					<span className='material-symbols-outlined text-xl'>description</span>
					Download Resume
				</Link>
			</div>
			<div className='flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-4'>
				<Link href={'https://www.linkedin.com/in/a-h-m-faisal/'}>
					<LinkedinIcon />
				</Link>
				<Link href={'https://discord.com/users/faisal_61237'}>
					<DiscordIcon />
				</Link>
			</div>
		</div>
	);
};
