'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);

	const navLinks = [
		{ name: 'Home', href: '/#home' },
		{ name: 'Projects', href: '/projects' },
		{ name: 'Blog', href: '/blog' },
		{ name: 'Contact', href: '/#contact' },
	];

	return (
		<header className='sticky top-0 z-50 w-full border-b border-card-border bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md'>
			<div className='max-w-300 mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='flex items-center justify-between h-16'>
					{/* Logo */}
					<Link href='/' className='flex items-center gap-2'>
						<div className='w-8 h-8 rounded bg-primary flex items-center justify-center text-white'>
							<span className='material-symbols-outlined text-xl'>code</span>
						</div>
						<span className='text-xl font-bold tracking-tight text-slate-900 dark:text-white'>
							A. H. M. Faisal
						</span>
					</Link>

					{/* Desktop Nav */}
					<nav className='hidden md:flex items-center gap-8'>
						{navLinks.map((link) => (
							<Link
								key={link.name}
								href={link.href}
								className='text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors'
							>
								{link.name}
							</Link>
						))}
					</nav>

					{/* CTA Button */}
					<div className='hidden md:flex'>
						<Link
							href='https://drive.google.com/file/d/1q5sb9HQzC9zwZ4R2-VCZYM1C4ZckMQyt/view?usp=sharing'
							type='button'
							className='bg-primary hover:bg-primary-hover text-white text-sm font-bold py-2 px-4 rounded transition-colors flex items-center gap-2 shadow-lg shadow-primary/25 transform active:scale-95'
						>
							<span className='material-symbols-outlined text-sm'>
								download
							</span>
							<span>Download Resume</span>
						</Link>
					</div>

					{/* Mobile Menu Button */}
					<button
						type='button'
						onClick={() => setIsOpen(!isOpen)}
						className='md:hidden p-2 rounded text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800'
					>
						<span className='material-symbols-outlined'>
							{isOpen ? 'close' : 'menu'}
						</span>
					</button>
				</div>
			</div>

			{/* Mobile Nav */}
			{isOpen && (
				<div className='md:hidden bg-white dark:bg-background-dark border-b border-card-border'>
					<div className='px-4 pt-2 pb-6 space-y-1'>
						{navLinks.map((link) => (
							<Link
								key={link.name}
								href={link.href}
								onClick={() => setIsOpen(false)}
								className='block px-3 py-2 text-base font-medium text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary'
							>
								{link.name}
							</Link>
						))}
						<Link
							href='https://drive.google.com/file/d/1q5sb9HQzC9zwZ4R2-VCZYM1C4ZckMQyt/view?usp=sharing'
							className='w-full mt-4 bg-primary hover:bg-primary-hover text-white font-bold py-3 px-4 rounded transition-colors flex items-center justify-center gap-2'
						>
							<span className='material-symbols-outlined text-sm'>
								download
							</span>
							<span>Download Resume</span>
						</Link>
					</div>
				</div>
			)}
		</header>
	);
}
