'use server';

// IMPORTS
import {redirect} from 'next/navigation';
import {cookies} from 'next/headers';

// SWITCH LANGUAGE
const changeLanguage = async ({language}) => {
	
	// GET COOKIE-STORE
	const cookieStore = cookies();
	
	// SAVE IN COOKIE
	cookieStore.set('lang', language);
	
	// REDIRECT
	redirect(`/${language}`);
	
};

// GET LANGUAGE
const getLanguage = async () => {
	
	// GET COOKIE-STORE
	const cookieStore = cookies();
	
	// CHECK IF LANGUAGE IS AVAILABLE
	const language = cookieStore.get('lang')?.value || 'en';
	
	// RETURN
	return language;
};

// EXPORTS
export {
	changeLanguage,
	getLanguage,
};
