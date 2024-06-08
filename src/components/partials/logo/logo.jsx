'use client';

// IMPORTS
import './logo.scss';
import {useSearchParams} from 'next/navigation';

// ICON
const Logo = ({className, type}) => {
	
	// BRING IN PARAMS
	const params = useSearchParams();
	
	// GET THEME
	const theme = params.get('theme');
	
	// RENDER
	return (
	<div className={`${className} logo`}>
		<figure className='logo__background'/>
		{type === 'arcmedia' ? (
		<img className='logo__icon' src={`/logos/${theme === 'dark' ? 'light' : 'dark'}/arcmedia.png`} alt=''/>
		) : null}
		{type === 'swiss-army' ? (
		<img className='logo__icon' src={`/logos/${theme === 'dark' ? 'light' : 'dark'}/swiss-army.png`} alt=''/>
		) : null}
		{type === 'calydo' ? (
		<img className='logo__icon' src={`/logos/${theme === 'dark' ? 'light' : 'dark'}/calydo.png`} alt=''/>
		) : null}
		{type === 'codeworks' ? (
		<img className='logo__icon' src={`/logos/${theme === 'dark' ? 'light' : 'dark'}/codeworks.png`} alt=''/>
		) : null}
		{type === 'haas-web-solutions' ? (
		<img className='logo__icon' src={`/logos/${theme === 'dark' ? 'light' : 'dark'}/haas-web-solutions.png`} alt=''/>
		) : null}
	</div>
	);
	
};

export {
	Logo,
};