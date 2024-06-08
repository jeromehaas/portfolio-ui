'use server';

// IMPORTS
import {cookies} from 'next/headers';

// GET THEME
const getTheme = async() => {
	
	// GET COOKIE-STORE
	const cookieStore = cookies();
	
	// GET THEME
	const theme = cookieStore.get('theme')?.value || 'light';
	
	// RETURN 
	return theme;
	
};

// SET THEME
const setTheme = async() => {
	
	// GET COOKIE-STORE
	const cookieStore = cookies();
	
	// GET THEME
	const theme = cookieStore.get('theme')?.value;
	
	// CHANGE THEME
	const newTheme = theme === 'dark' ? 'light' : 'dark';
	
	// SET OR UPDATE COOKIE
	cookieStore.set('theme', newTheme);
	
};

// EXPORTS
export {
	getTheme,
	setTheme,
};
