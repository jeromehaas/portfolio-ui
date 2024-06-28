// IMPORTS
import './icon.scss';
import Image from 'next/image';
import {useSearchParams} from 'next/navigation';

// ICON
const Icon = ({className = '', type = '', onClick = null}) => {
	
	// BRING IN PARAMS
	const params = useSearchParams();
	
	// GET THEME
	const theme = params.get('theme');
	
	// RENDER
	return (
	<div className={`${className} icon`} onClick={onClick}>
		{type === 'moon' ? <Image className='icon__source' src={`/icons/${theme === 'light' ? 'dark' : 'light'}/icon-moon.svg`} width={24} height={24} alt='Moon' loading='eager'/> : null}
		{type === 'language' ? <Image className='icon__source' src={`/icons/${theme === 'light' ? 'dark' : 'light'}/icon-language.svg`} width={24} height={24} alt='Language' loading='eager'/> : null}
		{type === 'email' ? <Image className='icon__source' src={`/icons/${theme === 'light' ? 'dark' : 'light'}/icon-email.svg`} width={24} height={24} alt='E-Mail' loading='eager'/> : null}
		{type === 'phone' ? <Image className='icon__source' src={`/icons/${theme === 'light' ? 'dark' : 'light'}/icon-phone.svg`} width={24} height={24} alt='Phone' loading='eager'/> : null}
		{type === 'play' ? <Image className='icon__source' src={`/icons/${theme === 'light' ? 'dark' : 'light'}/icon-play.svg`} width={24} height={24} alt='Play' loading='eager'/> : null}
		{type === 'pause' ? <Image className='icon__source' src={`/icons/${theme === 'light' ? 'dark' : 'light'}/icon-pause.svg`} width={24} height={24} alt='Pause' loading='eager'/> : null}
		{type === 'github' ? <Image className='icon__source' src={`/icons/${theme === 'light' ? 'dark' : 'light'}/icon-github.svg`} width={24} height={24} alt='GitHub' loading='eager'/> : null}
		{type === 'linkedin' ? <Image className='icon__source' src={`/icons/${theme === 'light' ? 'dark' : 'light'}/icon-linkedin.svg`} width={24} height={24} alt='LinkedIn' loading='eager'/> : null}
		{type === 'instagram' ? <Image className='icon__source' src={`/icons/${theme === 'light' ? 'dark' : 'light'}/icon-instagram.svg`} width={24} height={24} alt='Instagram' loading='eager'/> : null}
		{type === 'external-link' ? <Image className='icon__source' src={`/icons/${theme === 'light' ? 'dark' : 'light'}/icon-external-link.svg`} width={24} height={24} alt='External Link' loading='eager'/> : null}
	</div>
	);
	
};

// EXPORTS
export {
	Icon,
};