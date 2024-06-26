// IMPORTS
import './address.scss';
import Card from '@/components/layouts/card/card';
import {H2, H3} from '@/components/partials/heading/heading';
import {getAddressData} from '@/services/get-address-data';

// CONTACT ADDRESS
const Address = async () => {
	
	// GET DATA
	const {data} = await getAddressData();
	
	// RENDER
	return (
	<Card className='address'>
		<H2 className='address__title'>{data?.attributes?.title}</H2>
		<div className='address__info info'>
			<H3 className='info__item'>{data?.attributes?.info?.name}</H3>
			<H3 className='info__item'>{data?.attributes?.info?.street}</H3>
			<H3 className='info__item'>{data?.attributes?.info?.plz} {data?.attributes?.info.town}</H3>
			<H3 className='info__item'>{data?.attributes?.info?.country}</H3>
		</div>
	</Card>
	);
	
};

// EXPORTS
export default Address;