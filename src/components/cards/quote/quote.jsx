// IMPORTS
import './quote.scss';
import Card from '@/components/layouts/card/card';
import {P} from '@/components/partials/paragraph/paragraph';
import {getLanguage} from '@/actions/lang';

// QUOTE
const Quote = async () => {
	
	// GET LANGUAGE
	const language = await getLanguage();
	
	// GET DATA
	const response = await fetch(`http://localhost:1337/api/quote?locale=${language}`);
	const {data} = await response.json();
	
	// RETURN
	return (
	<Card className='quote'>
		<P className='quote__content paragraph--big paragraph--bold'>{data?.attributes?.content}</P>
		<P className='quote__author'>{data?.attributes?.author}</P>
	</Card>
	);
	
};

// EXPORTS
export default Quote;