// IMPORTS
import './hello-image.scss';
import Image from 'next/image';
import Card from '@/components/layouts/card/card';

// HELLO IMAGE
const HelloImage = () => {
	
	// RENDER
	return (
	<Card className='hello-image'>
		<Image className='hello-image__portrait' src='/images/portrait-jeromehaas.jpg' alt='Jérôme Haas' priority width='1340' height='1400'/>
	</Card>
	);
	
};

// EXPORTS
export default HelloImage;