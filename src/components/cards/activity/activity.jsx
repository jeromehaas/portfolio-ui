// IMPORTS
import './activity.scss';
import Card from '@/components/layouts/card/card';
import {H2} from '@/components/partials/heading/heading';
import ActivityChart from '@/components/elements/activity-chart/activity-chart';

// ACTIVITY
const Activity = () => {
	
	// RENDER
	return (
	<Card className='activity'>
		<H2 className='activity__title'>Activity</H2>
		<ActivityChart className='activity__chart'/>
	</Card>
	);
};

// EXPORTS
export default Activity;