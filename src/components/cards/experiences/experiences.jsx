// IMPORTS
import './experiences.scss';
import Card from '@/components/layouts/card/card';
import History from '@/components/elements/history/history';
import {H2} from '@/components/partials/heading/heading';

// EXPERIENCES
const Experiences = () => {
	
	// RENDER
	return (
	<Card className='experiences'>
		<H2 className='experiences__title'>Experiences</H2>
		<History className='experiences__history'/>
	</Card>
	);
	
};

// EXPORTS
export default Experiences;