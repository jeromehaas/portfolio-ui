// IMPORTS
import './submit-button.scss';

// BUTTON 
const SubmitButton = ({className = '', children = null, onClick = null, disabled = false}) => {
	
	// RENDER
	return (
	<input className={`${className} submit-button button`} onClick={onClick} type='submit' disabled={disabled} value={children}/>
	);
	
};

// EXPORTS
export {
	SubmitButton,
};