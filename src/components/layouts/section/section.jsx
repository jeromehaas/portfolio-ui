// IMPORTS
import './section.scss';

// SECTION
const Section = ({ children }) => {

	// RENDER
	return (
		<main className="section grid">
			{ children }
		</main>
	);

};

// EXPORTS
export default Section;