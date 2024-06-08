// IMPORTS
import './site.scss';
import Navigation from '@/components/blocks/navigation/navigation';
import Content from '@/components/blocks/content/content';
import {getTheme} from '@/actions/theme';
import Notification from '@/components/blocks/notification/notification';

// SITE
const Site = async({children}) => {
	
	// GET THEME
	const theme = await getTheme();
	
	// RENDER
	return (
	<div className={`site ${theme === 'light' ? 'light' : 'dark'} transition`}>
		<div className='site__container'>
			<Notification className='site__notification'/>
			<Navigation className='site__navigation'/>
			<Content className='site__content'>
				{children}
			</Content>
		</div>
	</div>
	);
	
};

// EXPORTS
export default Site;