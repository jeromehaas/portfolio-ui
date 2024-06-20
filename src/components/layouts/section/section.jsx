// IMPORTS
import './section.scss';

// SECTION
const Section = ({className = '', children = null}) => {
	
	// RENDER
	return (
	<div className={`${className} section`}>
		{children}
	</div>
	);
	
};

// EXPORTS
export default Section;