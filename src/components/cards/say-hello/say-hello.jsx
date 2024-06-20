// IMPORTS
import './say-hello.scss';
import Card from '@/components/layouts/card/card';
import ContactForm from '@/components/elements/contact-form/contact-form';
import {H2} from '@/components/partials/heading/heading';
import {P} from '@/components/partials/paragraph/paragraph';

// SAY HELLO
const SayHello = () => {
	
	// RENDER
	return (
	<Card className='say-hello'>
		<H2 className='say-hello__title'>Say Hello</H2>
		<P className='say-hello__text'>Reach out and connect with me. I look forward to getting back to you shortly.</P>
		<ContactForm className='say-hello__contact-form'/>
	</Card>
	);
	
};

// EXPORTS
export default SayHello;