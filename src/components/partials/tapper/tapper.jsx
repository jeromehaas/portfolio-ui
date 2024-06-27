'use client';

// IMPORTS
import './tapper.scss';
import {Icon} from '@/components/partials/icon/icon';

// TAPPER
const Tapper = ({className = '', type = '', onClick = null}) => {
	
	// RENDER
	return (
	<div className={`${className} tapper`} onClick={onClick}>
		<div className='tapper__background background'>
			<Icon className='tapper__icon icon' type={type}/>
		</div>
	</div>
	);
	
};

// EXPORTS
export {
	Tapper,
};