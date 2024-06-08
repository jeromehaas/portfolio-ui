'use client';

// IMPORTS
import './contact-social-email.scss';
import Card from '@/components/layouts/card/card';
import {Tapper} from '@/components/partials/tapper/tapper';

// CONTACT SOCIAL EMAIL
const ContactSocialEmail = () => {
	
	// HANDLE ICON-CLICK
	const handleIconClick = () => {
		
		// OPEN LINK
		window.open('mailto:hello@jeromehaas.ch', '_blank');
		
	};
	
	// RENDER
	return (
	<Card className='contact-social-email'>
		<Tapper className='contact-social-email__tapper' type='email' onClick={handleIconClick}/>
	</Card>
	);
	
};

// EXPORTS
export default ContactSocialEmail;