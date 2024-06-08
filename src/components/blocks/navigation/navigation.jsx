'use client';

// IMPORTS
import './navigation.scss';
import dictionary from './dictionary.json';
import Link from 'next/link';
import {useParams, usePathname, useRouter} from 'next/navigation';
import {useEffect} from 'react';
import {P} from '@/components/partials/paragraph/paragraph';
import {gsap} from 'gsap';

// NAVIGATION
const Navigation = ({className}) => {
	
	// BRING IN PARAMS AND PATHNAME
	const params = useParams();
	const pathname = usePathname();
	
	// BRING IN ROUTER
	const router = useRouter();
	
	// GET LOCALE AND PATHNAME
	const {lang} = params;
	
	// UPDATE ACTIVE TAB
	const updateActiveTab = () => {
		
		// GET ALL LINKS
		const links = document.querySelectorAll('.navigation__link');
		
		// REMOVE ACTIVE LINKS
		links.forEach((link) => link.classList.remove('link--active'));
		
		// ADD ACTIVE CLASS TO ACTIVE LINK
		links.forEach((link) => {
			if (link.getAttribute('href') === pathname) link.classList.add('link--active');
		});
		
	};
	
	// ON MOUNT SHOW CARDS
	useEffect(() => {
		
		// SHOW CARDS
		gsap.to('.card', {opacity: 1, top: '0px', duration: 0.5, stagger: 0.05, ease: 'power4.inOut'});
		gsap.to('.navigation', {opacity: 1, top: '0px', duration: 0.5, ease: 'power4.inOut'});
		// gsap.to('.navigation .link--active', {backgroundColor: '#9EC', duration: 0.5, ease: 'power4.inOut'});
		
	}, [pathname]);
	
	// HANDLE ROUTE-CHANGE
	const handleRouteChange = (event, href) => {
		
		// PREVENT DEFAULT
		event.preventDefault();
		
		// HIDE CARDS
		gsap.to('.card', {opacity: 0, top: '-24px', duration: 0.5, stagger: 0.05, ease: 'power4.inOut', onComplete: () => router.push(href)});
		
	};
	
	// ON MOUNT ACTIVATE ACTIVE TAB
	useEffect(() => {
		
		// UPDATE ACTIVE TAB
		updateActiveTab();
		
	}, [pathname]);
	
	// RENDER
	return (
	<nav className={`${className} navigation transition`}>
		<Link className='navigation__link link transition' href={`/${lang}/`} onClick={(event) => handleRouteChange(event, `/${lang}/`)}>
			<P className='link__label'>{dictionary[lang]['hello']}</P>
		</Link>
		<Link className='navigation__link link transition' href={`/${lang}/experiences`} onClick={(event) => handleRouteChange(event, `/${lang}/experiences`)}>
			<P className='link__label'>{dictionary[lang]['experiences']}</P>
		</Link>
		<Link className='navigation__link link transition' href={`/${lang}/tech-stack`} onClick={(event) => handleRouteChange(event, `/${lang}/tech-stack`)}>
			<P className='link__label'>{dictionary[lang]['tech-stack']}</P>
		</Link>
		<Link className='navigation__link link transition' href={`/${lang}/work`} onClick={(event) => handleRouteChange(event, `/${lang}/work`)}>
			<P className='link__label'>{dictionary[lang]['work']}</P>
		</Link>
		<Link className='navigation__link link transition' href={`/${lang}/contact`} onClick={(event) => handleRouteChange(event, `/${lang}/contact`)}>
			<P className='link__label'>{dictionary[lang]['contact']}</P>
		</Link>
	</nav>
	);
	
};

// EXPORTS
export default Navigation;
