export type Post = {
	id: number | string;
	title: string;
	excerpt: string;
	image: string;
	date: string;
};

export type BlogPost = Post & {
	category: string;
	readTime: string;
};