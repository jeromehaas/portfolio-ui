// IMPORTS
import './connector.scss';
import Link from 'next/link';
import {Icon} from '@/components/partials/icon/icon';


// CONNECTOR 
const Connector = ({className = '', href = '/', target = '_self', onClick = null}) => {
	
	// RENDER
	return (
	<Link className={`${className} connector`} href={href} target={target} onClick={onClick}>
		<Icon className='connector__icon' type='connector'/>
	</Link>
	);
	
};

// EXPORTS
export {
	Connector,
};