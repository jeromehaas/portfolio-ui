'use client';

// IMPORTS
import './tech-stack-introduction.scss';
import dictionary from './dictionary.json';
import Card from '@/components/layouts/card/card';
import {H2} from '@/components/partials/heading/heading';
import {P} from '@/components/partials/paragraph/paragraph';

// EXPERIENCES INTRODUCTION
const TechStackIntroduction = ({lang}) => {
	
	// RENDER
	return (
	<Card className='tech-stack-introduction'>
		<H2 className='tech-stack-introduction__title'> {dictionary[lang].title}</H2>
		<P className='tech-stack-introduction__title'> {dictionary[lang].text}</P>
	</Card>
	);
	
};

// EXPORTS
export default TechStackIntroduction;