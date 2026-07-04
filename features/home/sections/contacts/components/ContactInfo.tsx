export const ContactInfo = ({
	icon,
	label,
	value,
}: {
	icon: string;
	label: string;
	value: string;
}) => {
	return (
		<div className='flex items-start gap-4'>
			<div className='w-10 h-10 rounded-full bg-blue-400/20 flex items-center justify-center shrink-0'>
				<span className='material-symbols-outlined'>{icon}</span>
			</div>
			<div>
				<p className='text-sm text-blue-200 font-medium uppercase tracking-wider mb-1'>
					{label}
				</p>
				<p className='font-medium text-lg'>{value}</p>
			</div>
		</div>
	);
};