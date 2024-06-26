// IMPORTS
import './activity.scss';
import Card from '@/components/layouts/card/card';
import {H2} from '@/components/partials/heading/heading';
import ActivityChart from '@/components/elements/activity-chart/activity-chart';
import {getActivityData} from '@/services/get-activity-data';

// ACTIVITY
const Activity = async () => {
	
	// GET DATA
	const {data } = await getActivityData();
	
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