'use client';

// IMPORTS
import './contact-social-github.scss';
import Card from '@/components/layouts/card/card';
import {Tapper} from '@/components/partials/tapper/tapper';

// CONTACT SOCIAL GITHUB
const ContactSocialGithub = () => {
	
	// HANDLE ICON CLICK
	const handleIconClick = () => {
		
		// OPEN LINK
		window.open('https://www.github.com/jeromehaas', '_blank');
		
	};
	
	// RENDER
	return (
	<Card className='contact-social-github'>
		<Tapper className='contact-social-github__tapper' type='github' onClick={handleIconClick}/>
	</Card>
	);
	
};

// EXPORTS
export default ContactSocialGithub;