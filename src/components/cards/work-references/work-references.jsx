'use client';

// IMPORTS
import './work-references.scss';
import dictionary from './dictionary.json';
import Card from '@/components/layouts/card/card';
import {H3} from '@/components/partials/heading/heading';
import {P} from '@/components/partials/paragraph/paragraph';
import {Connector} from '@/components/partials/connector/connector';
import {useParams} from 'next/navigation';
import {Brand} from '@/components/partials/brand/brand';

// CONTACT WORK REFERENCES
const WorkReferences = () => {
	
	// BRING IN PARAMS
	const params = useParams();
	
	// GET LANGUAGE
	const {lang} = params;
	
	// RENDER
	return (
	<>
		{dictionary[lang].items.map((item, index) => (
		<Card className='work-references' key={index}>
			<Brand className='work-references__logo' type={item.id}/>
			<div className='work-references metadata'>
				<H3 className='metadata__title'></H3>
				<P className='metadata__year'>2022</P>
			</div>
			<P className='work-references__description'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto eligendi nisi recusandae?</P>
			<Connector className='work-references__connector' href={`/${lang}`}/>
		</Card>
		))}
	</>
	);
	
};

// EXPORTS
export default WorkReferences;