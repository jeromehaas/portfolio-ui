// IMPORTS
import './calendar.scss';
import moment from 'moment';
import Card from '@/components/layouts/card/card';
import {P} from '@/components/partials/paragraph/paragraph.jsx';
import {Highlight} from '@/components/partials/highlight/highlight';

// CALENDAR
const Calendar = () => {
	
	// GET DATE, MONTH AND YEAR
	const now = moment();
	const day = now.format('DD');
	const month = now.format('MMM');
	const year = now.format('YYYY');
	
	// RENDER
	return (
	<Card className='calendar'>
		<P className='calendar__day paragraph--huge paragraph--bold'>{day}</P>
		<P className='calendar__month-and-year paragraph--bold paragraph--big'><Highlight className='calendar__month-highlight'>{month}</Highlight> {year}</P>
	</Card>
	);
	
};

// EXPORTS
export default Calendar;