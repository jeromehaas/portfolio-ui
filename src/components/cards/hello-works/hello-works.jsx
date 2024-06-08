'use client';

// IMPORTS
import './hello-works.scss';
import dictionary from './dictionary.json';
import Card from '@/components/layouts/card/card';
import {useParams} from 'next/navigation';
import {H2} from '@/components/partials/heading/heading';
import {P} from '@/components/partials/paragraph/paragraph';
import {Connector} from '@/components/partials/connector/connector';

// HELLO WORKS
const HelloWorks = () => {
	
	// BRING IN PARAMS
	const params = useParams();
	
	// GET LANGUAGE
	const {lang} = params;
	
	// RENDER
	return (
	<Card className='hello-works'>
		<H2 className='hello-works__title'>{dictionary[lang]['title']}</H2>
		<P className='hello-works__text'>{dictionary[lang]['text']}</P>
		<Connector className='hello-works__connector' href={`/${lang}/work`}/>
	</Card>
	);
	
};


// EXPORTS
export default HelloWorks;


