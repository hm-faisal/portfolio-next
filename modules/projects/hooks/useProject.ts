import { useState } from 'react';

const PROJECTS = [
	{
		id: 1,
		title: 'E-Commerce Analytics',
		description:
			'A comprehensive dashboard for online retailers to track real-time sales, inventory levels, and customer demographics with interactive charts.',
		tags: ['React', 'Node.js', 'MongoDB', 'D3.js'],
		category: 'Full Stack',
		image:
			'https://res.cloudinary.com/djk1mxbvj/image/upload/v1770648513/Screenshot_2026-02-09_at_20-47-49_Home_Dwelling_Haven_fjicuy.png',
	},
	{
		id: 2,
		title: 'Social Connect',
		description:
			'A responsive social media interface featuring infinite scroll, real-time notifications, and dark mode support.',
		tags: ['Vue.js', 'Tailwind CSS', 'Firebase'],
		category: 'Frontend',
		image:
			'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800',
	},
	{
		id: 3,
		title: 'TaskFlow Manager',
		description:
			'Collaborative task management tool allowing teams to organize workflows, set deadlines, and track progress visually.',
		tags: ['Next.js', 'PostgreSQL', 'Prisma'],
		category: 'Full Stack',
		image:
			'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80&w=800',
	},
	{
		id: 4,
		title: 'Weather Widget',
		description:
			'A beautiful, location-aware weather application that consumes OpenWeather API to display forecasts with animated icons.',
		tags: ['JavaScript', 'CSS3', 'REST API'],
		category: 'Frontend',
		image:
			'https://images.unsplash.com/photo-1592210454359-9043f067919b?auto=format&fit=crop&q=80&w=800',
	},
	{
		id: 5,
		title: 'Secure Auth API',
		description:
			'A robust authentication microservice supporting JWT tokens, OAuth2, and role-based access control for enterprise apps.',
		tags: ['Node.js', 'Express', 'Redis'],
		category: 'Backend',
		image:
			'https://images.unsplash.com/photo-1558494949-ef010cbdcc4b?auto=format&fit=crop&q=80&w=800',
	},
	{
		id: 6,
		title: 'Real-time Chat',
		description:
			'An instant messaging platform with WebSocket integration for real-time delivery, typing indicators, and media sharing.',
		tags: ['Socket.io', 'React', 'MongoDB'],
		category: 'Full Stack',
		image:
			'https://images.unsplash.com/photo-1611746872915-64382b5c76da?auto=format&fit=crop&q=80&w=800',
	},
];

export const useProjects = () => {
	const [search, setSearch] = useState('');
	const [activeTab, setActiveTab] = useState('All');

	const categories = ['All', 'Frontend', 'Backend', 'Full Stack', 'Mobile'];

	const filteredProjects = PROJECTS.filter((project) => {
		const matchesSearch =
			project.title.toLowerCase().includes(search.toLowerCase()) ||
			project.tags.some((tag) =>
				tag.toLowerCase().includes(search.toLowerCase()),
			);
		const matchesTab = activeTab === 'All' || project.category === activeTab;
		return matchesSearch && matchesTab;
	});

	return {
		search,
		setSearch,
		activeTab,
		setActiveTab,
		categories,
		filteredProjects,
	};
};
