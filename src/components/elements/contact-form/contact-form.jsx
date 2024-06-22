'use client';

// IMPORTS
import './contact-form.scss';
import {TextInput} from '@/components/inputs/text-input/text-input';
import {TextArea} from '@/components/inputs/text-area/text-area';
import {Button} from '@/components/partials/button/button';
import {useParams} from 'next/navigation';
import {useState} from 'react';
import {useForm} from 'react-hook-form';
import {useNotificationStore} from '@/stores/use-notification-store';
import {submitContactForm} from '@/actions/submit-contact-form';

// CONTACT FORM
const ContactForm = ({className = '', form = null}) => {
	
	// BRING IN PARAMS
	const params = useParams();
	
	// BRING IN FORM
	const contactForm = useForm();
	
	// SETUP STATE
	const [isLoading, setIsLoading] = useState(false);
	
	// BRING IN NOTIFICATION-STORE
	const {addNotification} = useNotificationStore();
	
	// GET LANG
	const {lang} = params;
	
	// HANDLE SUBMIT
	const handleSubmit = async(event) => {
		
		// PREVENT DEFAULT
		event.preventDefault();
		
		// UPDATE LOADING-STATE
		setIsLoading(true);
		
		// CHECK IF FORM IS VALID
		const formIsValid = await contactForm.trigger();
		
		// IF FORM IS VALID
		if (formIsValid) {
			
			// GET VALUES
			const values = contactForm.getValues();
			
			// VALIDATE FORM
			await submitContactForm({
				values: {
					firstname: values?.['contact-form']?.['firstname'],
					lastname: values?.['contact-form']?.['lastname'],
					email: values?.['contact-form']?.['email'],
					phone: values?.['contact-form']?.['phone'],
					message: values?.['contact-form']?.['message'],
				},
			});
			
			// ADD NOTIFICATION
			await addNotification({message: form?.notification?.success});
			
			// RESET FORM
			await contactForm.reset({
				'contact-form': null,
			});
			
			// UPDATE LOADING-STATE
			setIsLoading(false);
			
		}
		
		// UPDATE LOADING-STATE
		setIsLoading(false);
		
	};
	
	// RENDER
	return (
	<div className={`${className} contact-form`}>
		{form?.inputs.filter((input) => input?.type === 'text').map((input) => (
		<TextInput className={`contact-form__input ${input?.width === 'small' ? 'input--50' : 'input--100'}`} id={input?.field} context='contact-form' register={contactForm.register} placeholder={input?.placeholder} required={input?.required} pattern={input?.pattern} error={contactForm.formState.errors} key={input?.id}/>
		))}
		{form?.inputs.filter((input) => input.type === 'textarea').map((input) => (
		<TextArea className={`contact-form__input ${input?.width === 'small' ? 'input--50' : 'input--100'}`} id={input?.field} context='contact-form' register={contactForm.register} placeholder={input?.placeholder} required={input?.required} pattern={input?.pattern} error={contactForm.formState.errors} key={input?.id}/>
		))}
		{form?.button && <Button className='contact-form__input input--100 button--dark' href={form?.button?.href} onClick={(event) => handleSubmit(event)} disabled={isLoading}>{form?.button?.label}</Button>}
	</div>
	);
	
};

// EXPORTS
export default ContactForm;