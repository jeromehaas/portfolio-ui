'use client';

// IMPORTS
import './phone-connector.scss';
import {Tapper} from '@/components/partials/tapper/tapper';

// PHONE CONNECTOR
const PhoneConnector = ({className = ''}) => {
	
	// HANDLE PHONE
	const handlePhone = () => {
		
		// OPEN NEW TAB
		window.open('tel:0795129016');
		
	};
	
	// RENDER
	return (
	<div className={`${className} phone-connector`}>
		<Tapper className='phone-connector__tapper' type='phone' onClick={handlePhone}/>
	</div>
	);
	
};

// EXPORTS
export default PhoneConnector;