'use server';

// IMPORTS
import {getLanguage} from '@/actions/lang';

// GET LOCATION-DATA
const getLocationData = async() => {
	
	// TRY-CATCH BLOCK
	try {
		
		// GET LANGUAGE
		const language = await getLanguage();
		
		// SEND MESSAGE
		const response = await fetch(`${process.env.NEXT_PUBLIC_APP_CMS_URI}/api/location?locale=${language}&populate=*`, {
			method: 'GET',
			headers: {'Content-Type': 'application/json'},
		});
		
		// CHECK RESPONSE
		if (response.status !== 200) {
			
			// THROW ERROR
			throw new Error('Error: could not fetch data!');
			
		}
		
		// PARSE DATA
		const {data} = await response.json();
		
		// RETURN
		return {
			success: true,
			data: data,
		};
		
	}
	
	// HANDLE ERRORS
	catch (error) {
		
		// RETURN
		return {
			success: false,
			data: null,
		};
		
	}
	
};

// EXPORTS
export {
	getLocationData,
};
