'use client';

// IMPORTS
import './hello-language-toggle.scss';
import Card from '@/components/layouts/card/card';
import {Tapper} from '@/components/partials/tapper/tapper';
import {useParams} from 'next/navigation';
import {changeLanguage} from '@/actions/lang';

// HELLO LANGUAGE-TOGGLE
const HelloLanguageToggle = () => {
	
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
	<Card className='hello-language-toggle'>
		<Tapper className='hello-language-toggle__tapper' type='language' onClick={handleLanguageChange}/>
	</Card>
	);
	
};

// EXPORTS
export default HelloLanguageToggle;