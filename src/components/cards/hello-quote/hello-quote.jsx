'use client';

// IMPORTS
import './hello-quote.scss';
import dictionary from './dictionary.json';
import Card from '@/components/layouts/card/card';
import {Quote} from '@/components/partials/quote/quote';
import {P} from '@/components/partials/paragraph/paragraph';
import {useParams} from 'next/navigation';

// HELLO QUOTE
const HelloQuote = () => {
	
	// BRING IN PARAMS 
	const params = useParams();
	
	// GET LANGUAGE
	const {lang} = params;
	
	// RETURN 
	return (
	<Card className='hello-quote'>
		<Quote className='hello-quote__quote'>{dictionary[lang]['quote']}</Quote>
		<P className='hello-quote__author'>{dictionary[lang]['author']}</P>
	</Card>
	);
	
};

// EXPORTS
export default HelloQuote;