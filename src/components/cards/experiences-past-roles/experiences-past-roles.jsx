'use client';

// IMPORTS
import './experiences-past-roles.scss';
import dictionary from './dictionary.json';
import Card from '@/components/layouts/card/card';
import {P} from '@/components/partials/paragraph/paragraph';
import {useParams} from 'next/navigation';
import {Logo} from '@/components/partials/logo/logo';
import {H3} from '@/components/partials/heading/heading';
import {Connector} from '@/components/partials/connector/connector';

// EXPERIENCES PAST ROLES
const ExperiencesPastRoles = () => {
	
	// BRING IN PARAMS
	const params = useParams();
	
	// GET LANGUAGE
	const {lang} = params;
	
	// RENDER
	return (
	<>
		{dictionary[lang].items.map((item) => (
		<Card className='experiences-past-roles' key={item.id}>
			<div className='experiences-past-roles__header header'>
				<Logo className='header__logo' type={item?.id}/>
				<div className='header__metadata metadata'>
					<H3 className='metadata__role'>{item?.role}</H3>
					<P className='metadata__company'>{item?.company}</P>
					<P className='metadata__date'>{item?.date}</P>
				</div>
			</div>
			<P className='experiences-past-roles__description description'>{item?.description}</P>
			<Connector className='experiences-past-roles__connector' href={item?.connector?.link}/>
		</Card>
		))}
	</>
	);
	
};

// EXPORTS
export default ExperiencesPastRoles;