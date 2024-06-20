'use client';

// IMPORTS
import './email-connector.scss';
import {Tapper} from '@/components/partials/tapper/tapper';

// EMAIL CONNECTOR
const EmailConnector = ({className = ''}) => {
	
	// HANDLE LANGUAGE-CHANGE
	const handleEmail = () => {
		
		// OPEN NEW TAB
		window.open('mailto:hello@jeromehaas.ch');
		
	};
	
	// RENDER
	return (
	<div className={`${className} email-connector`}>
		<Tapper className='email-connector__tapper' type='email' onClick={handleEmail}/>
	</div>
	);
	
};

// EXPORTS
export default EmailConnector;