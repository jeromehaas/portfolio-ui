// IMPORTS
import './icon.scss';

// ICON
const Icon = ({className, type}) => {
	
	// RENDER
	return (
	<div className={`${className} icon`}>
		{type === 'connector' ? (
		<svg className='icon__connector connector' width='37' height='37' viewBox='0 0 37 37' fill='none' xmlns='http://www.w3.org/2000/svg'>
			<circle className='connector__circle' cx='18.5' cy='18.5' r='17.5' fill='none' strokeWidth='2'/>
			<path className='connector__path' d='M11.2929 25.2929C10.9024 25.6834 10.9024 26.3166 11.2929 26.7071C11.6834 27.0976 12.3166 27.0976 12.7071 26.7071L11.2929 25.2929ZM27 12C27 11.4477 26.5523 11 26 11L17 11C16.4477 11 16 11.4477 16 12C16 12.5523 16.4477 13 17 13H25V21C25 21.5523 25.4477 22 26 22C26.5523 22 27 21.5523 27 21L27 12ZM12.7071 26.7071L26.7071 12.7071L25.2929 11.2929L11.2929 25.2929L12.7071 26.7071Z' fill='red'/>
		</svg>
		) : null}
	</div>
	);
	
};

export {
	Icon,
};