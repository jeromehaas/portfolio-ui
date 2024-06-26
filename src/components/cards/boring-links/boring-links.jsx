// IMPORTS
import './boring-links.scss';
import Card from '@/components/layouts/card/card';
import {H2} from '@/components/partials/heading/heading';
import {Button} from '@/components/partials/button/button';
import {getBoringLinksData} from '@/services/get-boring-links-data';

// BORING LINKS
const BoringLinks = async() => {
	
	// GET DATA
	const {data} = await getBoringLinksData();
	
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