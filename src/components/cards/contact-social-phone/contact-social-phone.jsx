'use client';

// IMPORTS
import './contact-social-phone.scss';
import Card from '@/components/layouts/card/card';
import {Tapper} from '@/components/partials/tapper/tapper';

// CONTACT SOCIAL PHONE
const ContactSocialPhone = () => {
	
	// HANDLE ICON-CLICK
	const handleIconClick = () => {
		
		// OPEN LINK
		window.open('tel:0041795129016', '_blank');
		
	};
	
	// RENDER
	return (
	<Card className='contact-social-phone'>
		<Tapper className='contact-social-phone__tapper' type='phone'/>
	</Card>
	);
	
};

// EXPORTS
export default ContactSocialPhone;