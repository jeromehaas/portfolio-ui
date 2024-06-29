// IMPORTS
import './error.scss';
import Card from '@/components/layouts/card/card';
import {H1, H2, H3} from '@/components/partials/heading/heading';
import {P} from '@/components/partials/paragraph/paragraph';
import {Button} from '@/components/partials/button/button';
import {getErrorData} from '@/services/get-error-data';

// ERROR
const Error = async () => {
	
	// GET DATA
	const {data} = await getErrorData();
	
	// RENDER
	return (
	<Card className='error'>
		<H2 className='error__peaker'>{data?.attributes?.peaker}</H2>
		<H2 className='error__title'>{data?.attributes?.title}</H2>
		<P className='error__text'>{data?.attributes?.text}</P>
		<Button className='error__button' href={data?.attributes?.button?.href}>{data?.attributes?.button?.label} </Button>
	</Card>
	);
};

// EXPORTS
export default Error;
