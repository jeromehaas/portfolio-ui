// IMPORTS
import './stats.scss';
import Card from '@/components/layouts/card/card';
import Insights from '@/components/elements/insights/insights';
import {H2} from '@/components/partials/heading/heading';

// STATS
const Stats = () => {
	
	// DEFINE DATA
	const data = [
		{title: 'Hours of experience', value: '+ 10\'000'},
		{title: 'Lines of code written', value: '+ 1\'000\'000'},
		{title: 'Average typing speed', value: '50 WMP'},
		{title: 'Longest coding session', value: '+ 16 Hours'},
		{title: 'Completed projects', value: '+ 30'},
	];
	
	// RENDER
	return (
	<Card className='stats'>
		<H2 className='stats__title'>Stats</H2>
		<Insights className='stats__insights' insights={data}/>
	</Card>
	);
	
};

// EXPORTS
export default Stats;