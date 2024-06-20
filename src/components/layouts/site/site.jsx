// IMPORTS
import './site.scss';
import Content from '@/components/blocks/content/content';
import {getTheme} from '@/actions/theme';
import Notification from '@/components/blocks/notification/notification';

// SITE
const Site = async({children = null}) => {
	
	// GET THEME
	const theme = await getTheme();
	
	// RENDER
	return (
	<div className={`site ${theme === 'light' ? 'light' : 'dark'} transition`}>
		<div className='site__container'>
			<Notification className='site__notification'/>
			<Content className='site__content'>
				{children}
			</Content>
		</div>
	</div>
	);
	
};

// EXPORTS
export default Site;