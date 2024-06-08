'use client';

// IMPORTS
import './contact-social-instagram.scss';
import Card from '@/components/layouts/card/card';
import {Tapper} from '@/components/partials/tapper/tapper';

// CONTACT SOCIAL INSTAGRAM
const ContactSocialInstagram = () => {
	
	// HANDLE ICON CLICK
	const handleIconClick = () => {
		
		// OPEN LINK
		window.open('https://www.instagram.com/_jeromehaas/', '_blank');
		
	};
	
	// RENDER
	return (
	<Card className='contact-social-instagram'>
		<Tapper className='contact-social-instagram' type='instagram' onClick={handleIconClick}/>
	</Card>
	);
	
};

// EXPORTS
export default ContactSocialInstagram;