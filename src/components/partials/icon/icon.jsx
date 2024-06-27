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
		{type === 'moon' ? <Image className='icon__source' src={`/icons/${theme === 'light' ? 'dark' : 'light'}/icon-moon.svg`} width={24} height={24} alt='Moon'/> : null}
		{type === 'language' ? <Image className='icon__source' src={`/icons/${theme === 'light' ? 'dark' : 'light'}/icon-language.svg`} width={24} height={24} alt='Language'/> : null}
		{type === 'email' ? <Image className='icon__source' src={`/icons/${theme === 'light' ? 'dark' : 'light'}/icon-email.svg`} width={24} height={24} alt='E-Mail'/> : null}
		{type === 'phone' ? <Image className='icon__source' src={`/icons/${theme === 'light' ? 'dark' : 'light'}/icon-phone.svg`} width={24} height={24} alt='Phone'/> : null}
		{type === 'play' ? <Image className='icon__source' src={`/icons/${theme === 'light' ? 'dark' : 'light'}/icon-play.svg`} width={24} height={24} alt='Play'/> : null}
		{type === 'pause' ? <Image className='icon__source' src={`/icons/${theme === 'light' ? 'dark' : 'light'}/icon-pause.svg`} width={24} height={24} alt='Pause'/> : null}
		{type === 'github' ? <Image className='icon__source' src={`/icons/${theme === 'light' ? 'dark' : 'light'}/icon-github.svg`} width={24} height={24} alt='GitHub'/> : null}
		{type === 'linkedin' ? <Image className='icon__source' src={`/icons/${theme === 'light' ? 'dark' : 'light'}/icon-linkedin.svg`} width={24} height={24} alt='LinkedIn'/> : null}
		{type === 'instagram' ? <Image className='icon__source' src={`/icons/${theme === 'light' ? 'dark' : 'light'}/icon-instagram.svg`} width={24} height={24} alt='Instagram'/> : null}
		{type === 'external-link' ? <Image className='icon__source' src={`/icons/${theme === 'light' ? 'dark' : 'light'}/icon-external-link.svg`} width={24} height={24} alt='External Link'/> : null}
	</div>
	);
	
};

// EXPORTS
export {
	Icon,
};