// IMPORTS
import './experiences-introduction.scss';
import Card from '@/components/layouts/card/card';
import {H2} from '@/components/partials/heading/heading';
import {P} from '@/components/partials/paragraph/paragraph';

// EXPERIENCES INTRODUCTION
const ExperiencesIntroduction = () => {
	
	// RENDER
	return (
	<Card className='experiences-introduction'>
		<H2 className='experiences-introduction__title'>A web developer since 2020</H2>
		<P className='experiences-introduction__text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, illo?</P>
	</Card>
	);
	
};

// EXPORTS
export default ExperiencesIntroduction;