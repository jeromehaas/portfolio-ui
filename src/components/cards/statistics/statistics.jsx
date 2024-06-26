// IMPORTS
import './statistics.scss';
import Card from '@/components/layouts/card/card';
import Insights from '@/components/elements/insights/insights';
import {H2} from '@/components/partials/heading/heading';
import {getTheme} from '@/actions/theme';
import {getStatisticsData} from '@/services/get-statistics-data';

// STATS
const Statistics = async () => {
	
	// GET THEME
	const theme = await getTheme();
	
	// GET DATA
	const {data} = await getStatisticsData();
	
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