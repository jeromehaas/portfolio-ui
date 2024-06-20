// IMPORTS
import './paragraph.scss';

// PARAGRAPH 
const P = ({className = '', children = null}) => {
	
	// RENDER
	return (
	<p className={`${className} paragraph`}>
		{children}
	</p>
	);
	
};

// EXPORTS
export {
	P,
};