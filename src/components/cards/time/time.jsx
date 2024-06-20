// IMPORTS
import './time.scss';
import Card from '@/components/layouts/card/card';
import Clock from '@/components/elements/clock/clock';

// TIME
const Time = () => {
	
	// RENDER
	return (
	<Card className='time'>
		<Clock className='time__clock'/>
	</Card>
	);
	
};

// EXPORTS
export default Time;