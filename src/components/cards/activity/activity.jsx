// IMPORTS
import './activity.scss';
import Card from '@/components/layouts/card/card';
import {H2} from '@/components/partials/heading/heading';
import ActivityChart from '@/components/elements/activity-chart/activity-chart';
import {getLanguage} from '@/actions/lang';

// ACTIVITY
const Activity = async () => {
	
	// GET LANGUAGE
	const language = await getLanguage();
	
	// GET DATA
	const response = await fetch(`http://localhost:1337/api/activity?locale=${language}`);
	const {data} = await response.json();
	
	// RENDER
	return (
	<Card className='activity'>
		<H2 className='activity__title'>{data?.attributes?.title}</H2>
		<ActivityChart className='activity__chart' events={data?.attributes?.events}/>
	</Card>
	);
};

// EXPORTS
export default Activity;