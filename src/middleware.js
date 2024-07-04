// IMPORTS
import {NextResponse} from 'next/server';

// GET RESPONSE METHODS
const {redirect} = NextResponse;

// DEFINE LOCALES
let locales = ['en', 'de', 'ch'];

// MIDDLEWARE
export function middleware(request) {
	
	// GET URL
	const url = request.nextUrl.clone();
	
	// GET PATHNAME
	const {pathname} = url;
	
	// GET COOKIES
	const {cookies} = request;
	
	// GET LANGUAGE
	const language = cookies.get('lang')?.value || 'en';
	
	// CHECK IF LOCALE IS AVAILABLE
	const pathnameHasLocale = locales.some((locale) => {
		return pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`;
	});
	

	// IF NO LOCALE IS SET
	if (!pathnameHasLocale) {
		
		// CREATE PATH
		const path = new URL(`/${language}${pathname}`, url);
		
		// REDIRECT
		return redirect(path);
		
	}
	
	// GET THEME
	const theme = cookies.get('theme')?.value || 'dark';
	
	// CHECK IF THEME IS AVAILABLE
	const pathnameHasTheme = url.searchParams.get('theme');
	
	// IF NO LOCALE IS SET
	if (!pathnameHasTheme) {
		
		// CREATE PATH
		url.searchParams.set('theme', theme);
		
		// REDIRECT
		return redirect(url);
		
	}
	
}

// EXPORTS
export const config = {
	
	// MATCHER
	matcher: [
		'/((?!api|_next/static|_next/image|favicon.ico|fonts|public|documents|audio|graphics|images|logos|brands|icons|references|devicons|sitemap).*)',
	],
	
};