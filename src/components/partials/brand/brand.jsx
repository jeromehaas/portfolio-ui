// IMPORTS
import './brand.scss';
import {useSearchParams} from 'next/navigation';

// ICON
const Brand = ({className, type}) => {
	
	// BRING IN PARAMS
	const params = useSearchParams();
	
	// GET THEME
	const theme = params.get('theme');
	
	// RENDER
	return (
	<div className={`${className} brand`}>
		<figure className='brand__background'/>
		{type === 'wespi-sins' ? (
		<img className='brand__icon' src={`/brands/${theme === 'dark' ? 'light' : 'dark'}/wespi-sins.png`} alt=''/>
		) : null}
		{type === 'kr-consulting' ? (
		<img className='brand__icon' src={`/brands/${theme === 'dark' ? 'light' : 'dark'}/kr-consulting.png`} alt=''/>
		) : null}
		{type === 'reiheacht' ? (
		<img className='brand__icon' src={`/brands/${theme === 'dark' ? 'light' : 'dark'}/reiheacht.png`} alt=''/>
		) : null}
		{type === 'samira-haas' ? (
		<img className='brand__icon' src={`/brands/${theme === 'dark' ? 'light' : 'dark'}/samira-haas.png`} alt=''/>
		) : null}
		{type === 'heller-grafik' ? (
		<img className='brand__icon' src={`/brands/${theme === 'dark' ? 'light' : 'dark'}/heller-grafik.png`} alt=''/>
		) : null}
		{type === 'praxis-am-dietschiberg' ? (
		<img className='brand__icon' src={`/brands/${theme === 'dark' ? 'light' : 'dark'}/praxis-am-dietschiberg.png`} alt=''/>
		) : null}
	</div>
	);
	
};

export {
	Brand,
};