// IMPORTS
import './curriculum-vitae.scss';
import Card from '@/components/layouts/card/card';
import {H2} from '@/components/partials/heading/heading';
import {P} from '@/components/partials/paragraph/paragraph';
import {Button} from '@/components/partials/button/button';
import {getCurriculumVitaeData} from '@/services/get-curriculum-vitae-data';

// CONTACT ADDRESS
const CurriculumVitae = async () => {
	
	// GET DATA
	const {data} = await getCurriculumVitaeData();
	
	// RENDER
	return (
	<Card className='curriculum-vitae'>
		<H2 className='curriculum-vitae__title'>{data?.attributes?.title}</H2>
		<P className='curriculum-vitae__text'>{data?.attributes?.text}</P>
		<Button className='curriculum-vitae__button' href={data?.attributes?.button?.href} target='_blank'>{data?.attributes.button?.label}</Button>
	</Card>
	);
	
};

// EXPORTS
export default CurriculumVitae;
