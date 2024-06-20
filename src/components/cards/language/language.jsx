// IMPORTS
import './language.scss';
import Card from '@/components/layouts/card/card';
import LanguageSwitcher from '@/components/elements/language-switcher/language-switcher';

// LANGUAGE
const Language = () => {
	
	// RENDER
	return (
	<Card className='language'>
		<LanguageSwitcher className='language__language-switcher'/>
	</Card>
	);
	
};

// EXPORTS
export default Language;