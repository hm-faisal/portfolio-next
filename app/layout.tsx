import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
	subsets: ['latin'],
	variable: '--font-inter',
});

export const metadata: Metadata = {
	title: 'Portfolio - Full Stack Engineer',
	description:
		'A professional portfolio showcasing full-stack development skills.',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en' className='dark'>
			<head>
				<link
					rel='stylesheet'
					href='https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap'
				/>
			</head>
			<body
				className={`${inter.variable} font-display bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen flex flex-col`}
			>
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	);
}
