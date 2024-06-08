'use client';

// IMPORTS
import './work-introduction.scss';
import dictionary from './dictionary.json';
import Card from '@/components/layouts/card/card';
import {H2} from '@/components/partials/heading/heading';
import {P} from '@/components/partials/paragraph/paragraph';
import {useParams} from 'next/navigation';

// CONTACT WORK INTRODUCTION
const WorkIntroduction = () => {
	
	// BRING IN PARAMS
	const params = useParams();
	
	// GET LANGUAGE 
	const {lang} = params;
	
	// RENDER
	return (
	<Card className='work-introduction'>
		<H2 className='work-introduction__title'>{dictionary[lang].title}</H2>
		<P className='work-introduction__text'>{dictionary[lang].text}</P>
	</Card>
	);
	
};

// EXPORTS
export default WorkIntroduction;