// IMPORTS
import './highlight.scss';

// HIGHLIGHT
const Highlight = ({className = '', children = null}) => {
	
	// RENDER
	return (
	<span className={`${className} highlight`}>
		{children}
	</span>
	);
	
};

// EXPORTS
export {
	Highlight,
};
