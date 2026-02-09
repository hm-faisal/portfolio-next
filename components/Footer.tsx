import Link from 'next/link';

export default function Footer() {
	return (
		<footer className='border-t border-card-border bg-card-dark py-8'>
			<div className='max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4'>
				<p className='text-slate-500 dark:text-slate-400 text-sm'>
					© {new Date().getFullYear()} A. H. M. Faisal. All rights reserved.
				</p>
				<div className='flex gap-6 text-sm font-medium'>
					<Link
						href='/privacy'
						className='text-slate-500 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors'
					>
						Privacy Policy
					</Link>
				</div>
			</div>
		</footer>
	);
}
