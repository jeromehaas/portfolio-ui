'use client';

// IMPORTS
import './contact-social-linkedin.scss';
import Card from '@/components/layouts/card/card';
import {Tapper} from '@/components/partials/tapper/tapper';

// CONTACT SOCIAL LINKEDIN
const ContactSocialLinkedin = () => {
	
	// HANDLE ICON-CLICK
	const handleIconClick = () => {
		
		// OPEN LINK
		window.open('https://www.linkedin.com/in/jeromehaas/', '_blank');
		
	};
	
	// RENDER
	return (
	<Card className='contact-social-linkedin'>
		<Tapper className='contact-social-linkedin' type='linkedin' onClick={handleIconClick}/>
	</Card>
	);
	
};

// EXPORTS
export default ContactSocialLinkedin;