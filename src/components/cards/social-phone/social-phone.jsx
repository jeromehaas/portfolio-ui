// IMPORTS
import './social-phone.scss';
import Card from '@/components/layouts/card/card';
import PhoneConnector from '@/components/elements/phone-connector/phone-connector';

// SOCIAL PHONE
const SocialPhone = () => {
	
	// RENDER
	return (
	<Card className='social-phone'>
		<PhoneConnector className='social-phone__phone-connector'/>
	</Card>
	);
	
};

// EXPORTS
export default SocialPhone;