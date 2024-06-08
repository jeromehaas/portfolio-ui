'use client';

// IMPORTS
import './hello-experiences.scss';
import dictionary from './dictionary.json';
import Card from '@/components/layouts/card/card';
import {H2} from '@/components/partials/heading/heading';
import {P} from '@/components/partials/paragraph/paragraph';
import {Connector} from '@/components/partials/connector/connector';
import {useParams, useRouter} from 'next/navigation';
import {gsap} from 'gsap';

// HELLO EXPERIENCES
const HelloExperiences = () => {
	
	// BRING IN PARAMS
	const params = useParams();
	
	// BRING IN ROUTER
	const router = useRouter();
	
	// GET LANGUAGE
	const {lang} = params;
	
	// HANDLE ROUTE-CHANGE
	const handleRouteChange = (event, href) => {
		
		// PREVENT DEFAULT
		event.preventDefault();
		
		// HIDE CARDS
		gsap.to('.card', {opacity: 0, top: '-24px', duration: 0.5, stagger: 0.05, ease: 'power4.inOut', onComplete: () => router.push(href)});
		
	};
	
	// RENDER
	return (
	<Card className='hello-experiences'>
		<H2 className='hello-works__title'>{dictionary[lang]['title']}</H2>
		<P className='hello-works__text'>{dictionary[lang]['text']}</P>
		<Connector className='hello-works__connector' href={`/${lang}/experiences`} onClick={(event) => handleRouteChange(event, `/${lang}/experiences`)}/>
	</Card>
	);
	
};

// EXPORTS
export default HelloExperiences;