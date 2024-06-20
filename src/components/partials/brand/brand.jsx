// IMPORTS
import './brand.scss';
import Image from 'next/image';
import {useSearchParams} from 'next/navigation';

// BRAND
const Brand = ({className = '', type = ''}) => {
	
	// BRING IN PARAMS
	const params = useSearchParams();
	
	// GET THEME
	const theme = params.get('theme');
	
	// RENDER
	return (
	<div className={`${className} brand`}>
		<figure className='brand__background'/>
		{type === 'wespi-sins' ? (
		<Image className='brand__icon' width={40} height={40} src={`/brands/${theme === 'dark' ? 'light' : 'dark'}/wespi-sins.png`} alt='Wespi Sins'/>
		) : null}
		{type === 'kr-consulting' ? (
		<Image className='brand__icon' width={40} height={40} src={`/brands/${theme === 'dark' ? 'light' : 'dark'}/kr-consulting.png`} alt='KR Consulting'/>
		) : null}
		{type === 'reiheacht' ? (
		<Image className='brand__icon' width={40} height={40} src={`/brands/${theme === 'dark' ? 'light' : 'dark'}/reiheacht.png`} alt='Reiheacht'/>
		) : null}
		{type === 'samira-haas' ? (
		<Image className='brand__icon' width={40} height={40} src={`/brands/${theme === 'dark' ? 'light' : 'dark'}/samira-haas.png`} alt='Samira Haas'/>
		) : null}
		{type === 'heller-grafik' ? (
		<Image className='brand__icon' width={40} height={40} src={`/brands/${theme === 'dark' ? 'light' : 'dark'}/heller-grafik.png`} alt='Heller Grafik'/>
		) : null}
		{type === 'praxis-am-dietschiberg' ? (
		<Image className='brand__icon' width={40} height={40} src={`/brands/${theme === 'dark' ? 'light' : 'dark'}/praxis-am-dietschiberg.png`} alt='Praxis am Dietschiberg'/>
		) : null}
	</div>
	);
	
};

export {
	Brand,
};