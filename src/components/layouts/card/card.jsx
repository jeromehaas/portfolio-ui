// IMPORTS
import './card.scss';

// CARD
const Card = ({ className, children }) => {

	// RENDER
	return (
		<div className={`${ className } card`}>
			{ children }
		</div>
	);

};

// EXPORTS
export default Card