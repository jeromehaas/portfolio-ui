// IMPORTS
import './card.scss';

// CARD
const Card = ({className = '', children = null}) => {
	
	// RENDER
	return (
	<div className={`${className} card`}>
		{children}
	</div>
	);
	
};

// EXPORTS
export default Card;