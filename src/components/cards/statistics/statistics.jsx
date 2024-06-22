// IMPORTS
import './statistics.scss';
import Card from '@/components/layouts/card/card';
import Insights from '@/components/elements/insights/insights';
import {H2} from '@/components/partials/heading/heading';
import {getLanguage} from '@/actions/lang';
import {getTheme} from '@/actions/theme';

// STATS
const Statistics = async () => {
	
	// GET THEME
	const theme = await getTheme();
	
	// GET LANGUAGE
	const language = await getLanguage();
	
	// GET DATA
	const response = await fetch(`http://localhost:1337/api/statistic?locale=${language}&populate=*`);
	const {data} = await response.json();
	
	// RENDER
	return (
	<Card className='statistics'>
		<H2 className='statistics__title'>{data?.attributes?.title}</H2>
		<Insights className='statistics__insights' insights={data?.attributes?.insights} theme={theme} />
	</Card>
	);
	
};

// EXPORTS
export default Statistics;