'use client';

// IMPORTS
import './linkedin-connector.scss';
import {Tapper} from '@/components/partials/tapper/tapper';

// LINKEDIN CONNECTOR
const LinkedinConnector = ({className = ''}) => {
	
	// HANDLE LINKEDIN
	const handleLinkedin = () => {
		
		// OPEN NEW TAB
		window.open('https://www.linkedin.com/in/jeromehaas/');
		
	};
	
	// RENDER
	return (
	<div className={`${className} linkedin-connector`}>
		<Tapper className='linkedin-connector__tapper' type='linkedin' onClick={handleLinkedin}/>
	</div>
	);
	
};

// EXPORTS
export default LinkedinConnector;