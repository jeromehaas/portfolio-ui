'use server';

// IMPORTS
import {redirect} from 'next/navigation';
import {cookies} from 'next/headers';

// SWITCH LANGUAGE
const changeLanguage = async({language}) => {
	
	// GET COOKIE-STORE
	const cookieStore = cookies();
	
	// SAVE IN COOKIE
	cookieStore.set('lang', language);
	
	// REDIRECT
	redirect(`/${language}`);
	
};

// EXPORTS
export {
	changeLanguage,
};
