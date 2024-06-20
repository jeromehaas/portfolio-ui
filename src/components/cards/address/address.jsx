// IMPORTS
import './address.scss';
import Card from '@/components/layouts/card/card';
import {H2, H3} from '@/components/partials/heading/heading';

// CONTACT ADDRESS
const Address = () => {
	
	// RENDER
	return (
	<Card className='address'>
		<H2 className='address__title'>My Address</H2>
		<div className='address__info info'>
			<H3 className='info__item'>Jérôme Haas</H3>
			<H3 className='info__item'>Bodenmatte 16a</H3>
			<H3 className='info__item'>5647 Oberrüti</H3>
			<H3 className='info__item'>Switzerland</H3>
		</div>
	</Card>
	);
	
};

// EXPORTS
export default Address;