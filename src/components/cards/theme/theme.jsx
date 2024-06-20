// IMPORTS
import './theme.scss';
import Card from '@/components/layouts/card/card';
import ThemeToggle from '@/components/elements/theme-toggle/theme-toggle';

// THEME
const Theme = () => {
	
	// RENDER
	return (
	<Card className={'theme'}>
		<ThemeToggle className={'theme__theme-toggle'}/>
	</Card>
	);
	
};

// EXPORTS
export default Theme;
