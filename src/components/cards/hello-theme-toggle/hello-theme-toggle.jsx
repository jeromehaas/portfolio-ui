'use client';

// IMPORTS
import './hello-theme-toggle.scss';
import Card from '@/components/layouts/card/card';
import {Tapper} from '@/components/partials/tapper/tapper';
import {setTheme} from '@/actions/theme';
import {useRouter} from 'next/navigation';

// HELLO THEME-TOGGLE
const HelloThemeToggle = () => {
	
	// BRING IN ROUTER
	const router = useRouter();
	
	// HANDLE THEME-CHANGE
	const handleThemeChange = async() => {
		
		// CHANGE THEME
		await setTheme();
		router.push('/');
		
	};
	
	// RENDER
	return (
	<Card className={'hello-theme-toggle'}>
		<Tapper className='hello-theme-toggle__tapper' type='moon' onClick={() => handleThemeChange()}/>
	</Card>
	);
	
};

// EXPORTS
export default HelloThemeToggle;
