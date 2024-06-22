// IMPORTS
import './location.scss';
import Card from '@/components/layouts/card/card';
import Kroki from '@/components/elements/kroki/kroki';
import {getLanguage} from '@/actions/lang';

// LOCATION
const Location = async () => {
	
	// GET LANGUAGE
	const language = await getLanguage();
	
	// GET DATA
	const response = await fetch(`http://localhost:1337/api/location?locale=${language}&populate=*`);
	const {data} = await response.json();
	
	// RENDER
	return (
	<Card className='location'>
		<Kroki className='location__kroki' coordinates={data?.attributes?.coordinates} />
	</Card>
	);
	
};

// EXPORTS
export default Location;