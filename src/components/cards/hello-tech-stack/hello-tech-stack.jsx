'use client';

// IMPORTS
import './hello-tech-stack.scss';
import dictionary from './dictionary.json';
import Card from '@/components/layouts/card/card';
import {H2} from '@/components/partials/heading/heading';
import {P} from '@/components/partials/paragraph/paragraph';
import {Connector} from '@/components/partials/connector/connector';
import {useParams, useRouter} from 'next/navigation';
import {gsap} from 'gsap';

// HELLO SKILLS
const HelloTechStack = () => {
	
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
	<Card className='hello-tech-stack'>
		<H2 className='hello-tech-stack__title'>{dictionary[lang]['title']}</H2>
		<P className='hello-tech-stack__text'>{dictionary[lang]['text']}</P>
		<Connector className='hello-tech-stack__connector' href={`/${lang}/tech-stack`} onClick={(event) => handleRouteChange(event, `/${lang}/tech-stack`)}/>
	</Card>
	);
	
};

// EXPORTS
export default HelloTechStack;

