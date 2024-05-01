// IMPORTS
import './section.scss';

// SECTION
const Section = ({ children }) => {

	// RENDER
	return (
		<main className="section">
			{ children }
		</main>
	);

};

// EXPORTS
export default Section;