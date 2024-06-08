'use client';

// IMPORTS
import './contact-address.scss';
import dictionary from './dictionary.json';
import Card from '@/components/layouts/card/card';
import {useParams} from 'next/navigation';
import {H3} from '@/components/partials/heading/heading';

// CONTACT ADDRESS
const ContactAddress = () => {
	
	// BRING IN PARAMS AND SEARCH-PARAMS
	const params = useParams();
	
	// GET LANGUAGE
	const {lang} = params;
	
	// RENDER
	return (
	<Card className='contact-address'>
		<div className='contact-address address'>
			<H3 className='address__item'>{dictionary[lang].address.name}</H3>
			<H3 className='address__item'>{dictionary[lang].address.street}</H3>
			<H3 className='address__item'>{dictionary[lang].address.town}</H3>
			<H3 className='address__item'>{dictionary[lang].address.country}</H3>
		</div>
	</Card>
	);
	
};

// EXPORTS
export default ContactAddress;