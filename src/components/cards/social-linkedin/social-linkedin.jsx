// IMPORTS
import './social-linkedin.scss';
import Card from '@/components/layouts/card/card';
import LinkedinConnector from '@/components/elements/linkedin-connector/linkedin-connector';

// SOCIAL LINKEDIN
const SocialLinkedin = () => {
	
	// RENDER
	return (
	<Card className='social-linkedin'>
		<LinkedinConnector className='social-linkedin__linkedin-connector'/>
	</Card>
	);
	
};

// EXPORTS
export default SocialLinkedin;