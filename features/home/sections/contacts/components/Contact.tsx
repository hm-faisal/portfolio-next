import { ContactForm } from '@/components/form/ContactForm';
import { ContactInfo } from './ContactInfo';

export const ContactSection = () => {
	return (
		<section className='py-20' id='contact'>
			<div className='max-w-300 mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='bg-primary rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row'>
					<div className='lg:w-2/5 p-10 lg:p-12 text-white bg-primary-dark'>
						<h2 className='text-3xl font-bold mb-6'>
							Let's discuss your project
						</h2>
						<p className='text-blue-100 mb-10 leading-relaxed'>
							I'm always open to discussing new projects, creative ideas or
							opportunities to be part of your visions.
						</p>
						<div className='space-y-6'>
							<ContactInfo
								icon='mail'
								label='Mail me'
								value='ahmfaisal10@gmail.com'
							/>
							<ContactInfo
								icon='call'
								label='Call me'
								value='+880 178 873 4362'
							/>
							<ContactInfo
								icon='location_on'
								label='Location'
								value='Chattogram, Bangladesh'
							/>
						</div>
					</div>
					<div className='lg:w-3/5 p-10 lg:p-12 bg-white dark:bg-card-dark'>
						<ContactForm />
					</div>
				</div>
			</div>
		</section>
	);
};

