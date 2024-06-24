'use client';

// IMPORTS
import './theme-toggle.scss';
import {Tapper} from '@/components/partials/tapper/tapper';
import {setTheme} from '@/actions/theme';
import {useRouter} from 'next/navigation';

// THEME-TOGGLE
const ThemeToggle = ({className = ''}) => {
	
	// BRING IN ROUTER
	const router = useRouter();
	
	// HANDLE THEME-CHANGE
	const handleThemeChange = async() => {
		
		// CHANGE THEME
		await setTheme();
		
		// UPDATE ROUTE
		router.push('/', { scroll: false });
		
	};
	
	// RENDER
	return (
	<div className={`${className} theme-toggle`}>
		<Tapper className='theme-toggle__tapper' type='moon' onClick={handleThemeChange}/>
	</div>
	);
	
};

// EXPORTS
export default ThemeToggle;
