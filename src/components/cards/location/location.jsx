// IMPORTS
import './location.scss';
import Card from '@/components/layouts/card/card';
import Kroki from '@/components/elements/kroki/kroki';
import {getLocationData} from '@/services/get-location-data';

// LOCATION
const Location = async () => {
	
	// GET DATA
	const {data} = await getLocationData();
	
	// RENDER
	return (
	<Card className='location'>
		<Kroki className='location__kroki' coordinates={data?.attributes?.coordinates} />
	</Card>
	);
	
};

// EXPORTS
export default Location;