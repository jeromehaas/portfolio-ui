// IMPORTS
import './quote.scss';
import Card from '@/components/layouts/card/card';
import {P} from '@/components/partials/paragraph/paragraph';
import {getQuoteData} from '@/services/get-quote-data';

// QUOTE
const Quote = async () => {
	
	// GET DATA
	const {data} = await getQuoteData();
	
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