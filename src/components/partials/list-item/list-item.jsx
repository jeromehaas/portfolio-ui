// IMPORTS
import './list-item.scss';

// PARAGRAPH
const Li = ({className = '', children = null}) => {
	
	// RENDER
	return (
	<li className={`${className} list-item`}>
		{children}
	</li>
	);
	
};

// EXPORTS
export {
	Li,
};