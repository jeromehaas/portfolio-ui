// IMPORTS
import './curriculum-vitae.scss';
import Card from '@/components/layouts/card/card';
import {H2} from '@/components/partials/heading/heading';
import {P} from '@/components/partials/paragraph/paragraph';
import {Button} from '@/components/partials/button/button';
import {getLanguage} from '@/actions/lang';

// CONTACT ADDRESS
const CurriculumVitae = async () => {
	
	// GET LANGUAGE
	const language = await getLanguage();
	
	// GET DATA
	const response = await fetch(`http://localhost:1337/api/curriculum-vitae?locale=${language}&populate=*`);
	const {data} = await response.json();
	
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
