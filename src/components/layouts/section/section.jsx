// IMPORTS
import './section.scss';
import {forwardRef} from 'react';

// SECTION
const Section = forwardRef(({className = '', children = null}, ref) => {
	
	// RENDER
	return (
	<div className={`${className} section`} ref={ref}>
		{children}
	</div>
	);
	
});

// EXPORTS
export default Section;