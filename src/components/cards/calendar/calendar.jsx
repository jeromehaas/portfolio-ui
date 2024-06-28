// IMPORTS
import './calendar.scss';
import 'moment/locale/de';
import moment from 'moment';
import Card from '@/components/layouts/card/card';
import {P} from '@/components/partials/paragraph/paragraph.jsx';
import {Highlight} from '@/components/partials/highlight/highlight';
import {getLanguage} from '@/actions/lang';

// CALENDAR
const Calendar = async () => {
	
	// GET LANGUAGE
	const language = await getLanguage()
	
	// SET LOCALE
	moment.locale(language);
	
	// GET DATE, MONTH AND YEAR
	const now = moment();
	const day = now.format('DD');
	const month = now.format('MMM');
	const year = now.format('YYYY');
	
	// RENDER
	return (
	<Card className='calendar'>
		<P className='calendar__day paragraph--huge'>{day}</P>
		<P className='calendar__month-and-year paragraph--bold paragraph--big'><Highlight className='calendar__month-highlight'>{month}</Highlight> {year}</P>
	</Card>
	);
	
};

// EXPORTS
export default Calendar;