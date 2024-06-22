// IMPORTS
import './say-hello.scss';
import Card from '@/components/layouts/card/card';
import ContactForm from '@/components/elements/contact-form/contact-form';
import {H2} from '@/components/partials/heading/heading';
import {P} from '@/components/partials/paragraph/paragraph';
import {getLanguage} from '@/actions/lang';

// SAY HELLO
const SayHello = async () => {
	
	// GET LANGUAGE
	const language = await getLanguage();
	
	// GET DATA
	const response = await fetch(`http://localhost:1337/api/say-hello?locale=${language}&populate[form][populate][inputs]=*&populate[form][populate][button]=**&populate[form][populate][notification]=*`);
	const {data} = await response.json();
	
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