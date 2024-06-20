'use client';

// IMPORTS
import './instagram-connector.scss';
import {Tapper} from '@/components/partials/tapper/tapper';

// GITHUB CONNECTOR
const InstagramConnector = ({className = ''}) => {
	
	// HANDLE INSTAGRAM
	const handleInstagram = () => {
		
		// OPEN NEW TAB
		window.open('https://instagram.com/_jeromehaas');
		
	};
	
	// RENDER
	return (
	<div className={`${className} instagram-connector`}>
		<Tapper className='instagram-connector__tapper' type='instagram' onClick={handleInstagram}/>
	</div>
	);
	
};

// EXPORTS
export default InstagramConnector;