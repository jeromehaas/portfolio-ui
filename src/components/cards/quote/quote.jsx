// IMPORTS
import './quote.scss';
import Card from '@/components/layouts/card/card';
import {P} from '@/components/partials/paragraph/paragraph';

// QUOTE
const Quote = () => {
	
	// RETURN
	return (
	<Card className='quote'>
		<P className='quote__content paragraph--big paragraph--bold'>The web does not just connect machines, it connects people.</P>
		<P className='quote__author'>Tim Berners-Lee</P>
	</Card>
	);
	
};

// EXPORTS
export default Quote;