// IMPORTS
import './social-instagram.scss';
import Card from '@/components/layouts/card/card';
import InstagramConnector from '@/components/elements/instagram-connector/instagram-connector';

// SOCIAL INSTAGRAM
const SocialInstagram = () => {
	
	// RENDER
	return (
	<Card className='social-instagram'>
		<InstagramConnector className='socila-instagram__instagram-connector'/>
	</Card>
	);
	
};

// EXPORTS
export default SocialInstagram;