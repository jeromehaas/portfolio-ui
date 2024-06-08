'use client';

// IMPORTS
import './contact-introduction.scss';
import dictionary from './dictionary.json';
import Card from '@/components/layouts/card/card';
import {H2} from '@/components/partials/heading/heading';
import {P} from '@/components/partials/paragraph/paragraph';
import {useParams} from 'next/navigation';

// CONTACT INTRODUCTION
const ContactIntroduction = () => {
	
	// BRING IN PARAMS
	const params = useParams();
	
	// GET LANGUAGE
	const {lang} = params;
	
	// RENDER
	return (
	<Card className='contact-introduction'>
		<H2 className='contact-introduction__title'>{dictionary[lang].title}</H2>
		<P className='contact-introduction__title'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam sint rerum hic cum explicabo culpa, reiciendis eveniet modi delectus minima molestias labore vel eligendi molestiae aspernatur quos placeat. Pariatur, sapiente?</P>
	</Card>
	);
	
};

// EXPORTS
export default ContactIntroduction;