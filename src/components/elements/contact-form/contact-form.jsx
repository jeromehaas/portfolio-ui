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
const ContactForm = ({className = ''}) => {
	
	// BRING IN PARAMS
	const params = useParams();
	
	// BRING IN FORM
	const form = useForm();
	
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
		const formIsValid = await form.trigger();
		
		// IF FORM IS VALID
		if (formIsValid) {
			
			// GET VALUES
			const values = form.getValues();
			
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
			await addNotification({message: dictionary?.[lang]?.['success-message']});
			
			// RESET FORM
			await form.reset({
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
		<TextInput className='contact-form__input input--50' id='firstname' context='contact-form' register={form.register} placeholder={'Firstname'} required={true} pattern={/^[A-Za-zÀ-ÖØ-öø-ÿ'`-\s]+$/} error={form.formState.errors}/>
		<TextInput className='contact-form__input input--50' id='lastname' context='contact-form' register={form.register} placeholder={'Lastname'} required={true} pattern={/^[A-Za-zÀ-ÖØ-öø-ÿ'`-\s]+$/} error={form.formState.errors}/>
		<TextInput className='contact-form__input input--100' id='email' context='contact-form' register={form.register} placeholder={'E-Mail'} required={true} pattern={/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/} error={form.formState.errors}/>
		<TextInput className='contact-form__input input--100' id='phone' context='contact-form' register={form.register} placeholder={'Phone'} required={true} pattern={/^(?:\+41|0)?[ -]?\d{2}[ -]?\d{3}[ -]?\d{2}[ -]?\d{2}$/} error={form.formState.errors}/>
		<TextArea className='contact-form__input input--100' id='message' context='contact-form' register={form.register} placeholder={'Message'} required={true} pattern={/^[\s\S]{1,5000}$/} error={form.formState.errors}/>
		<Button className='contact-form__input input--100 button--dark' href='/' onClick={(event) => handleSubmit(event)} disabled={isLoading}>{'Send message'}</Button>
	</div>
	);
	
};

// EXPORTS
export default ContactForm;