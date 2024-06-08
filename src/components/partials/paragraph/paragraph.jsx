// IMPORTS
import './paragraph.scss';

// PARAGRAPH 
const P = ({className, children}) => {
	
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