export const AboutMeImage = () => {
	return (
		<div className='flex-1 w-full max-w-md lg:max-w-full flex justify-center lg:justify-end'>
			<div className='relative w-full aspect-square max-w-[400px] lg:max-w-[500px]'>
				<div className='w-full h-full rounded-2xl overflow-hidden shadow-2xl bg-card-dark border border-card-border relative group'>
					<div className='absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent opacity-60'></div>
					<div
						className='w-full h-full bg-cover bg-center'
						style={{
							backgroundImage: `url('https://res.cloudinary.com/djk1mxbvj/image/upload/v1783212814/Gemini_Generated_Image_rmtmk2rmtmk2rmtm_o5z90c.png')`,
						}}
					></div>
				</div>
			</div>
		</div>
	);
};
