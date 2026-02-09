'use client';

import { useState } from 'react';

export function ContactForm() {
	const [status, setStatus] = useState<
		'idle' | 'loading' | 'success' | 'error'
	>('idle');
	const [message, setMessage] = useState('');

	async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		setStatus('loading');
		setMessage('');

		const formData = new FormData(e.currentTarget);
		const data = {
			name: formData.get('name'),
			email: formData.get('email'),
			subject: formData.get('subject'),
			message: formData.get('message'),
		};

		try {
			const res = await fetch('/api/contact', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(data),
			});

			const result = await res.json();

			if (res.ok) {
				setStatus('success');
				setMessage('Thank you! Your message has been sent.');
				(e.target as HTMLFormElement).reset();
			} else {
				setStatus('error');
				setMessage(result.message || 'Failed to send message.');
			}
		} catch (err) {
			console.error(err);
			setStatus('error');
			setMessage('An unexpected error occurred. Please try again.');
		}
	}

	return (
		<form className='space-y-6' onSubmit={handleSubmit}>
			<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
				<div className='flex flex-col gap-2'>
					<label
						className='text-sm font-semibold text-slate-700 dark:text-slate-300'
						htmlFor='name'
					>
						Your Name
					</label>
					<input
						className='w-full h-12 px-4 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder:text-slate-400'
						id='name'
						name='name'
						placeholder='John Doe'
						type='text'
						required
						disabled={status === 'loading'}
					/>
				</div>
				<div className='flex flex-col gap-2'>
					<label
						className='text-sm font-semibold text-slate-700 dark:text-slate-300'
						htmlFor='email'
					>
						Your Email
					</label>
					<input
						className='w-full h-12 px-4 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder:text-slate-400'
						id='email'
						name='email'
						placeholder='john@example.com'
						type='email'
						required
						disabled={status === 'loading'}
					/>
				</div>
			</div>
			<div className='flex flex-col gap-2'>
				<label
					className='text-sm font-semibold text-slate-700 dark:text-slate-300'
					htmlFor='subject'
				>
					Subject
				</label>
				<input
					className='w-full h-12 px-4 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder:text-slate-400'
					id='subject'
					name='subject'
					placeholder='Project Inquiry'
					type='text'
					required
					disabled={status === 'loading'}
				/>
			</div>
			<div className='flex flex-col gap-2'>
				<label
					className='text-sm font-semibold text-slate-700 dark:text-slate-300'
					htmlFor='message'
				>
					Message
				</label>
				<textarea
					className='w-full p-4 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none placeholder:text-slate-400'
					id='message'
					name='message'
					placeholder='Tell me about your project...'
					rows={4}
					required
					disabled={status === 'loading'}
				></textarea>
			</div>
			<div className='flex flex-col gap-4'>
				<button
					className='inline-flex items-center justify-center h-12 px-8 rounded-lg bg-primary hover:bg-primary-hover text-white font-bold transition-all shadow-lg shadow-primary/20 w-full sm:w-auto disabled:opacity-50 disabled:cursor-not-allowed'
					type='submit'
					disabled={status === 'loading'}
				>
					{status === 'loading' ? 'Sending...' : 'Send Message'}
					<span className='material-symbols-outlined ml-2 text-sm'>send</span>
				</button>

				{message && (
					<p
						className={`text-sm font-medium ${status === 'success' ? 'text-green-500' : 'text-red-500'}`}
					>
						{message}
					</p>
				)}
			</div>
		</form>
	);
}
