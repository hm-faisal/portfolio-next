import { useState } from "react";

const POSTS = [
    {
        id: 1,
        category: 'Frontend',
        date: 'Oct 24, 2023',
        readTime: '12 min read',
        title: 'Optimizing React Performance for Large Scale Applications',
        excerpt:
            'Learn advanced techniques to reduce re-renders, improve load times, and manage state effectively in complex React ecosystems. We dive deep into memoization, virtualization, and code-splitting strategies.',
        image:
            'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=800',
        featured: true,
    },
    {
        id: 2,
        category: 'Backend',
        date: 'Oct 10, 2023',
        readTime: '5 min read',
        title: 'Scaling Node.js Microservices',
        excerpt:
            'A guide to structuring and scaling your Node.js architecture for enterprise-level traffic using clustering and load balancing.',
        image:
            'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800',
    },
    {
        id: 3,
        category: 'DevOps',
        date: 'Sep 28, 2023',
        readTime: '8 min read',
        title: 'Docker for Development Environments',
        excerpt:
            "Step-by-step tutorial on containerizing your local development environment to ensure consistent builds across all team members' machines.",
        image:
            'https://images.unsplash.com/photo-1605745341112-85968b193ef5?auto=format&fit=crop&q=80&w=800',
    },
    {
        id: 4,
        category: 'Backend',
        date: 'Sep 15, 2023',
        readTime: '6 min read',
        title: 'Understanding GraphQL Caching',
        excerpt:
            'Deep dive into caching strategies to optimize your GraphQL API responses, contrasting them with traditional REST caching mechanisms.',
        image:
            'https://images.unsplash.com/photo-1558494949-ef010cbdcc4b?auto=format&fit=crop&q=80&w=800',
    },
];

export const useBlog = () => {
    const [activeCategory, setActiveCategory] = useState('All Posts');

    const categories = [
        'All Posts',
        'Frontend',
        'Backend',
        'DevOps',
        'System Design',
    ];

    const featuredPost = POSTS.find((p) => p.featured);
    const otherPosts = POSTS.filter((p) => !p.featured);

    return {
        activeCategory,
        setActiveCategory,
        categories,
        featuredPost,
        otherPosts,
    };
};