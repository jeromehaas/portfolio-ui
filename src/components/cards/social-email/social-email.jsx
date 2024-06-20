// IMPORTS
import './social-email.scss';
import Card from '@/components/layouts/card/card';
import EmailConnector from '@/components/elements/email-connector/email-connector';

// SOCIAL EMAIL
const SocialEmail = () => {
	
	// RENDER
	return (
	<Card className='social-email'>
		<EmailConnector className='social-email__email-connector'/>
	</Card>
	);
	
};

// EXPORTS
export default SocialEmail;