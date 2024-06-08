'use client';

// IMPORTS
import './hello-introduction.scss';
import dictionary from './dictionary.json';
import Card from '@/components/layouts/card/card';
import {useParams, useRouter} from 'next/navigation';
import {H1} from '@/components/partials/heading/heading';
import {P} from '@/components/partials/paragraph/paragraph';
import {Button} from '@/components/partials/button/button';
import {gsap} from 'gsap';

// HELLO INTRODUCTION
const HelloIntroduction = ({className = ''}) => {
	
	// BRING IN PARAMS
	const params = useParams();
	
	// BRING IN ROUTER
	const router = useRouter();
	
	// GET LOCALE
	const {lang} = params;
	
	// GET THEME
	const theme = 'light';
	
	// HANDLE ROUTE-CHANGE
	const handleRouteChange = (event, href) => {
		
		// PREVENT DEFAULT
		event.preventDefault();
		
		// HIDE CARDS
		gsap.to('.card', {opacity: 0, top: '-24px', duration: 0.5, stagger: 0.05, ease: 'power4.inOut', onComplete: () => router.push(href)});
		
	};
	
	// HANDLE DOWNLOAD CV
	const handleDownloadCv = (event) => {
		
		// PREVENT DEFAULT
		event.preventDefault();
		
		// CREATE A LINK ELEMENT
		const link = document.createElement('a');
		
		// SET THE PATH OF THE FILE
		link.href = '/images/portrait-jeromehaas.jpg';
		
		// SET THE DOWNLOAD ATTRIBUTE WITH A FILENAME
		link.download = 'portrait-jeromehaas.jpg';
		
		// APPEND TO THE BODY TEMPORARILY
		document.body.appendChild(link);
		
		// TRIGGER THE DOWNLOAD
		link.click();
		
		// REMOVE THE LINK FROM THE BODY
		document.body.removeChild(link);
		
	};
	
	// RENDER
	return (
	<Card className={`${className} hello-introduction ${theme === 'dark' ? 'hello-introduction--dark' : 'hello-introduction--light'}`}>
		<H1 className='hello-introduction__title title'>{dictionary[lang]['title']}</H1>
		<H1 className='hello-introduction__subtitle subtitle'>{dictionary[lang]['subtitle']}</H1>
		<P className='hello-introduction__text text'>{dictionary[lang]['text']}</P>
		<div className='hello-introduction__actions actions'>
			<Button className='actions__item item button--dark' href={`/${lang}/contact`} onClick={(event) => handleRouteChange(event, `/${lang}/contact`)}>{dictionary[lang]['actions']['get-in-touch']}</Button>
			<Button className='actions__item item button--light' href='/' onClick={(event) => handleDownloadCv(event)}>{dictionary[lang]['actions']['download-cv']}</Button>
		</div>
	</Card>
	);
	
};

// EXPORTS
export default HelloIntroduction;