'use client';

// IMPORTS
import './plausible.scss';
import Script from 'next/script';

// LINKEDIN CONNECTOR
const Plausible = ({className = ''}) => {
	
	// GET ENVIRONMENT
	const environment = process.env.NEXT_PUBLIC_APP_ENVIRONMENT;
	
	// RENDER
	return (
	<div className={`${className} plausible`}>
		{environment === 'production' ? (
		<Script src='https://plausible.io/js/script.js' defer data-domain='jeromehaas.ch'/>
		) : null}
	</div>
	);
	
};

// EXPORTS
export default Plausible;