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
	
	// DEFINE PLACEHOLDER
	let language;
	
	// GET COOKIE-STORE
	const cookieStore = cookies();
	
	// CHECK IF LANGUAGE IS AVAILABLE
	const hasLanguage = cookieStore.get('lang')?.value;
	
	// IF LANGUAGE IS NOT AVAILABLE
	if (!hasLanguage) {
		
		// SET COOKIE
		cookieStore.set('lang', 'en');
		
		// SET LANGUAGE
		language = 'en';
		
	}
	
	// IF LANGUAGE IS AVAILABLE
	else {
		
		// SAVE IN COOKIE
		language = cookieStore.get('lang')?.value;
		
	}
	
	// RETURN
	return language;
};

// EXPORTS
export {
	changeLanguage,
	getLanguage,
};
