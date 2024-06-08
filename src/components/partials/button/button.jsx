// IMPORTS
import './button.scss';

// BUTTON 
const Button = ({className, children, onClick, href, disabled}) => {
	
	// RENDER
	return (
	<button className={`${className} button`} href={href} onClick={onClick} disabled={disabled}>
		{children}
	</button>
	);
	
};

// EXPORTS
export {
	Button,
};