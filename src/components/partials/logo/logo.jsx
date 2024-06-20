'use client';

// IMPORTS
import './logo.scss';
import {useSearchParams} from 'next/navigation';
import Image from 'next/image';

// LOGO
const Logo = ({className = '', type = ''}) => {
	
	// BRING IN PARAMS
	const params = useSearchParams();
	
	// GET THEME
	const theme = params.get('theme');
	
	// RENDER
	return (
	<div className={`${className} logo`}>
		<figure className='logo__background'/>
		{type === 'arcmedia' ? <Image className='logo__icon' width={40} height={40} src={`/logos/${theme === 'dark' ? 'light' : 'dark'}/arcmedia.png`} alt='Arcmedia'/> : null}
		{type === 'swiss-army' ? <Image className='logo__icon' width={40} height={40} src={`/logos/${theme === 'dark' ? 'light' : 'dark'}/swiss-army.png`} alt='Swiss Army'/> : null}
		{type === 'calydo' ? <Image className='logo__icon' width={40} height={40} src={`/logos/${theme === 'dark' ? 'light' : 'dark'}/calydo.png`} alt='Calydo'/> : null}
		{type === 'codeworks' ? <Image className='logo__icon' width={40} height={40} src={`/logos/${theme === 'dark' ? 'light' : 'dark'}/codeworks.png`} alt='Codeworks'/> : null}
		{type === 'haas-web-solutions' ? <Image className='logo__icon' width={40} height={40} src={`/logos/${theme === 'dark' ? 'light' : 'dark'}/haas-web-solutions.png`} alt='haas web solutions'/> : null}
	</div>
	);
	
};

export {
	Logo,
};