// IMPORTS
import './heading.scss';

// HEADING H1
const H1 = ({className = '', children = null}) => {
	
	// RENDER
	return (
	<h1 className={`${className} heading heading--h1`}>
		{children}
	</h1>
	);
	
};

// HEADING H2
const H2 = ({className, children}) => {
	
	// RENDER
	return (
	<h2 className={`${className} heading heading--h2`}>
		{children}
	</h2>
	);
	
};

// HEADING H3
const H3 = ({className, children}) => {
	
	// RENDER
	return (
	<h3 className={`${className} heading heading--h3`}>
		{children}
	</h3>
	);
	
};

// HEADING H4
const H4 = ({className, children}) => {
	
	// RENDER
	return (
	<h4 className={`${className} heading heading--h4`}>
		{children}
	</h4>
	);
	
};

// EXPORTS
export {
	H1, H2, H3, H4,
};
