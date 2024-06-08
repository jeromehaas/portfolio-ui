// IMPORTS
import './quote.scss';
import {H3} from '../heading/heading';

// QUOTE
const Quote = ({className, children}) => {
	
	// RENDER
	return (
	<div className={`${className} quote`}>
		<H3 className='quote__text'>
			{children}
		</H3>
	</div>
	);
	
};

// EXPORTS
export {
	Quote,
};