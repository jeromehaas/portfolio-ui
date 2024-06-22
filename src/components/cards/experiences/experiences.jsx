// IMPORTS
import './experiences.scss';
import Card from '@/components/layouts/card/card';
import History from '@/components/elements/history/history';
import {H2} from '@/components/partials/heading/heading';
import {getLanguage} from '@/actions/lang';
import {getTheme} from '@/actions/theme';

// EXPERIENCES
const Experiences = async () => {
	
	// GET LANGUAGE
	const language = await getLanguage();
	
	// GET THEME
	const theme = await getTheme();
	
	// GET DATA
	const response = await fetch(`http://localhost:1337/api/experience?locale=${language}&populate[history][populate][logo][populate]=*&populate[history][populate][reference][populate]=*`);
	const {data} = await response.json();
	
	// RENDER
	return (
	<Card className='experiences'>
		<H2 className='experiences__title'>{data?.attributes?.title}</H2>
		<History className='experiences__history' history={data?.attributes?.history} theme={theme} />
	</Card>
	);
	
};

// EXPORTS
export default Experiences;