// IMPORTS
import './location.scss';
import Card from '@/components/layouts/card/card';
import Kroki from '@/components/elements/kroki/kroki';

// LOCATION
const Location = () => {
	
	// RENDER
	return (
	<Card className='location'>
		<Kroki className='location__kroki'/>
	</Card>
	);
	
};

// EXPORTS
export default Location;