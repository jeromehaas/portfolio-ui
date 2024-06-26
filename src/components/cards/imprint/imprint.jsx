// IMPORTS
import './imprint.scss';
import Card from '@/components/layouts/card/card';
import {H2} from '@/components/partials/heading/heading';
import {P} from '@/components/partials/paragraph/paragraph';
import {getLanguage} from '@/actions/lang';
import {Button} from '@/components/partials/button/button';

// IMPRINT
const Imprint = async () => {
	
	// GET LANGUAGE
	const language = await getLanguage();
	
	// GET DATA
	const response = await fetch(`http://localhost:1337/api/imprint?locale=${language}&populate=*`);
	const {data} = await response.json();
	
	// RENDER
	return (
	<Card className='imprint'>
		<H2 className='imprint__title'>{data?.attributes?.title}</H2>
		<div className='imprint__contributors contributors'>
			{data?.attributes?.contributors?.map((contributor) => (
			<div className='contributors__item item' key={contributor.id}>
				<P className='item__ paragraph--big paragraph--bold'>{contributor?.expertise}</P>
				<P className='item__name'>{contributor?.name}</P>
				<P className='item__street'>{contributor?.street}</P>
				<P className='item__location'>{contributor?.plz} {contributor?.town}</P>
				<P className='item__country'>{contributor?.country}</P>
				<P className='item__country'>{contributor?.email}</P>
				<P className='item__country'>{contributor?.phone}</P>
			</div>
			))}
		</div>
		<Button className='imprint__button' href={data?.attributes.button?.href}>{data?.attributes?.button?.label}</Button>
	</Card>
	);
	
};

// EXPORTS
export default Imprint