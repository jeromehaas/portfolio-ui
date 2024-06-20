'use client';

// IMPORTS
import './github-connector.scss';
import {Tapper} from '@/components/partials/tapper/tapper';

// GITHUB CONNECTOR
const GithubConnector = ({className = ''}) => {
	
	// HANDLE LANGUAGE-CHANGE
	const handleGithub = () => {
		
		// OPEN NEW TAB
		window.open('https://github.com/jeromehaas');
		
	};
	
	// RENDER
	return (
	<div className={`${className} github-connector`}>
		<Tapper className='github-connectort__tapper' type='github' onClick={handleGithub}/>
	</div>
	);
	
};

// EXPORTS
export default GithubConnector;