// IMPORTS
import './curriculum-vitae.scss';
import Card from '@/components/layouts/card/card';
import {H2} from '@/components/partials/heading/heading';
import {P} from '@/components/partials/paragraph/paragraph';
import {Button} from '@/components/partials/button/button';

// CONTACT ADDRESS
const CurriculumVitae = () => {
	
	// RENDER
	return (
	<Card className='curriculum-vitae'>
		<H2 className='curriculum-vitae__title'>Curriculum Vitae</H2>
		<P className='curriculum-vitae__text'>Find and download my curriculum vitae in the print version. It's no malware, I promise!</P>
		<Button className='curriculum-vitae__button' href='/documents/cv-jeromehaas.pdf' target='_blank'>Download</Button>
	</Card>
	);
	
};

// EXPORTS
export default CurriculumVitae;
