// IMPORTS
import './say-hello.scss';
import Card from '@/components/layouts/card/card';
import ContactForm from '@/components/elements/contact-form/contact-form';
import {H2} from '@/components/partials/heading/heading';
import {P} from '@/components/partials/paragraph/paragraph';
import {getSayHelloData} from '@/services/get-say-hello-data';

// SAY HELLO
const SayHello = async () => {
	
	// GET DATA
	const {data} = await getSayHelloData();
	
	// RENDER
	return (
	<Card className='say-hello'>
		<H2 className='say-hello__title'>{data?.attributes?.title}</H2>
		<P className='say-hello__text'>{data?.attributes?.text}</P>
		<ContactForm className='say-hello__contact-form' form={data?.attributes?.form} />
	</Card>
	);
	
};

// EXPORTS
export default SayHello;