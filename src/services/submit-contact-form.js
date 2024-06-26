'use server';

// SUBMIT CONTACT-FORM
const submitContactForm = async(values) => {
	
	// TRY-CATCH BLOCK
	try {
		
		// GET DATA
		const response = await fetch(`${process.env.NEXT_PUBLIC_APP_CMS_URI}/api/messages`, {
			method: 'POST',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({data: values}),
		});
		
		// CHECK RESPONSE
		if (response.status !== 200 || response.status === 201) {
			
			// THROW ERROR
			throw new Error('Error: submission of contact-form failed!')
			
		}
		
		// PARSE DATA
		const data = await response.json();
		
		// RETURN
		return {
			success: true,
			data: data
		};
		
	}
	
	// HANDLE ERRORS
	catch (error) {
	
	console.log(error);
		// RETURN
		return null;
		
	}
	
};

// EXPORTS
export {
	submitContactForm,
};
