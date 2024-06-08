// IMPORTS
import './content.scss';

// CONTENT
const Content = ({className, children}) => {
	
	// RENDER
	return (
	<main className={`${className} content`}>
		{children}
	</main>
	);
	
};

// EXPORTS
export default Content;