'use client';

// IMPORTS
import './language-switcher.scss';
import {Tapper} from '@/components/partials/tapper/tapper';
import {useParams} from 'next/navigation';
import {changeLanguage} from '@/actions/lang';

// LANGUAGE-SWITCHER
const LanguageSwitcher = ({className = ''}) => {
	
	// BRING IN PARAMS
	const params = useParams();
	
	// HANDLE LANGUAGE-CHANGE
	const handleLanguageChange = () => {
		
		// GET CURRENT LANGUAGE
		const {lang} = params;
		
		// REDIRECT TO NEW LOCALE
		if (lang === 'en') changeLanguage({language: 'de'});
		if (lang === 'de') changeLanguage({language: 'ch'});
		if (lang === 'ch') changeLanguage({language: 'en'});
		
	};
	
	// RENDER
	return (
	<div className={`${className} language-switcher`}>
		<Tapper className='language-switcher__tapper' type='language' onClick={handleLanguageChange}/>
	</div>
	);
	
};

// EXPORTS
export default LanguageSwitcher;