// IMPORTS
import './boring-links.scss';
import Card from '@/components/layouts/card/card';
import {H2} from '@/components/partials/heading/heading';
import {getLanguage} from '@/actions/lang';
import {Button} from '@/components/partials/button/button';

// BORING LINKS
const BoringLinks = async() => {
	
	// GET LANGUAGE
	const language = await getLanguage();
	
	// GET DATA
	const response = await fetch(`http://localhost:1337/api/boring-link?locale=${language}&populate=*`);
	const {data} = await response.json();
	
	// RENDER
	return (
	<Card className='boring-links'>
		<H2 className='boring-links__title'>{data?.attributes?.title}</H2>
		{data?.attributes?.links?.map((link) => (
		<Button className='boring-links__button' href={link?.href} key={link?.id}>{link?.label}</Button>
		))}
	</Card>
	);
	
};

// EXPORTS
export default BoringLinks;