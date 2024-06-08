'use client';

// IMPORTS
import './experiences-current-role.scss';
import dictionary from './dictionary.json';
import Card from '@/components/layouts/card/card';
import {P} from '@/components/partials/paragraph/paragraph';
import {useParams} from 'next/navigation';
import {Logo} from '@/components/partials/logo/logo';
import {H3} from '@/components/partials/heading/heading';
import {Connector} from '@/components/partials/connector/connector';

// EXPERIENCES CURRENT ROLE
const ExperiencesCurrentRole = () => {

// BRING IN PARAMS
	const params = useParams();

// GET LANGUAGE
	const {lang} = params;
	
	// RENDER
	return (
	<Card className='experiences-current-role'>
		<Logo className='experiences-current-role__logo' type={dictionary[lang]?.id}/>
		<div className='experiences-current-role__metadata metadata'>
			<H3 className='metadata'>{dictionary[lang]?.metadata?.role}</H3>
			<P className='metadata'>{dictionary[lang]?.metadata?.company}</P>
			<P className='metadata'>{dictionary[lang]?.metadata?.date}</P>
		</div>
		<P className='expirences-current-role__description'>{dictionary[lang]?.description}</P>
		<Connector className='experiences-current-role__connector' href={`/${lang}`}/>
	</Card>
	);
	
};

// EXPORTS
export default ExperiencesCurrentRole;