export default function PrivacyPolicy() {
	return (
		<main className='flex-grow py-16 lg:py-24 bg-background-light dark:bg-background-dark'>
			<div className='max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='flex flex-col gap-8'>
					<div className='border-b border-slate-200 dark:border-slate-800 pb-8'>
						<h1 className='text-4xl lg:text-5xl font-black text-slate-900 dark:text-white mb-4'>
							Privacy Policy
						</h1>
						<p className='text-slate-500 dark:text-slate-400 font-medium'>
							Last Updated: February 9, 2026
						</p>
					</div>

					<section className='prose prose-slate dark:prose-invert max-w-none flex flex-col gap-6 text-slate-600 dark:text-slate-300 leading-relaxed'>
						<div>
							<h2 className='text-2xl font-bold text-slate-900 dark:text-white mb-3'>
								1. Introduction
							</h2>
							<p>
								This Privacy Policy outlines how I handle information related to
								this portfolio website. As a professional software developer, I
								prioritize your privacy and aim to be transparent about the
								minimal data processed by this site.
							</p>
						</div>

						<div>
							<h2 className='text-2xl font-bold text-slate-900 dark:text-white mb-3'>
								2. Data Collection & Storage
							</h2>
							<p className='font-bold text-primary dark:text-blue-400'>
								IMPORTANT: This website does NOT collect, store, or process any
								user credentials, passwords, or sensitive personal information.
							</p>
							<p>
								The only point where data is actively handled is through the
								Contact Form.
							</p>
						</div>

						<div>
							<h2 className='text-2xl font-bold text-slate-900 dark:text-white mb-3'>
								3. Contact Form Information
							</h2>
							<p>
								When you use the contact form, the information you provide
								(Name, Email, Subject, and Message) is:
							</p>
							<ul className='list-disc pl-6 space-y-2'>
								<li>
									Sent directly to my professional email via a secure API route.
								</li>
								<li>
									Used solely for the purpose of responding to your inquiry.
								</li>
								<li>
									NOT stored in any database or shared with third-party
									marketing services.
								</li>
							</ul>
						</div>

						<div>
							<h2 className='text-2xl font-bold text-slate-900 dark:text-white mb-3'>
								4. Cookies and Tracking
							</h2>
							<p>
								This website is designed to be as lightweight as possible. It
								does not use tracking cookies, analytics trackers (like Google
								Analytics), or other invasive monitoring tools that identify
								individual users.
							</p>
						</div>

						<div>
							<h2 className='text-2xl font-bold text-slate-900 dark:text-white mb-3'>
								5. Third-Party Links
							</h2>
							<p>
								My portfolio contains links to external sites such as GitHub,
								LinkedIn, and blog platforms. Please be aware that I am not
								responsible for the privacy practices of these other sites. I
								encourage you to read their privacy statements.
							</p>
						</div>

						<div>
							<h2 className='text-2xl font-bold text-slate-900 dark:text-white mb-3'>
								6. Security
							</h2>
							<p>
								I implement industry-standard security measures to protect the
								transmission of data through the contact form, including SSL
								encryption for all traffic to and from this website.
							</p>
						</div>

						<div className='pt-8 border-t border-slate-200 dark:border-slate-800 mt-4'>
							<h2 className='text-2xl font-bold text-slate-900 dark:text-white mb-3'>
								7. Contact Me
							</h2>
							<p>
								If you have any questions regarding this policy or how your
								message is handled, please feel free to reach out via the
								contact form on the homepage.
							</p>
						</div>
					</section>
				</div>
			</div>
		</main>
	);
}
