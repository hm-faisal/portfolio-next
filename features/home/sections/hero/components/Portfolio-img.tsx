export const PortfolioImage = () => {
	return (
		<div className='flex-1 w-full max-w-md lg:max-w-full flex justify-center lg:justify-end'>
			<div className='relative w-full aspect-square max-w-[400px] lg:max-w-[500px]'>
				<div className='w-full h-full rounded-2xl overflow-hidden shadow-2xl bg-card-dark border border-card-border relative group'>
					<div className='absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent opacity-60'></div>
					<div
						className='w-full h-full bg-cover bg-center'
						style={{
							backgroundImage: `url('https://res.cloudinary.com/djk1mxbvj/image/upload/v1770650320/Gemini_Generated_Image_brtqphbrtqphbrtq_ctwlmp.png')`,
						}}
					></div>
					<div
						className='absolute -bottom-6 -left-6 bg-card-dark p-4 rounded-xl border border-card-border shadow-xl flex items-center gap-3 animate-bounce'
						style={{ animationDuration: '3s' }}
					>
						<div className='w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-500'>
							<span className='material-symbols-outlined'>check_circle</span>
						</div>
						<div>
							<p className='text-xs text-slate-400'>Experience</p>
							<p className='text-sm font-bold text-white'>Full Stack Ready</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
