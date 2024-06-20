// IMPORTS
import './button.scss';
import Link from 'next/link';

// BUTTON 
const Button = ({className = '', children = null, onClick = null, target = '', href = '/'}) => {
	
	// RENDER
	return (
	<Link className={`${className} button`} href={href} onClick={onClick} target={target} download>
		{children}
	</Link>
	);
	
};

// EXPORTS
export {
	Button,
};