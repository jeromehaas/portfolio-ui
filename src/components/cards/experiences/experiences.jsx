// IMPORTS
import './experiences.scss';
import Card from '@/components/layouts/card/card';
import History from '@/components/elements/history/history';
import {H2} from '@/components/partials/heading/heading';
import {getTheme} from '@/actions/theme';
import {getExperiencesData} from '@/services/get-experiences-data';

// EXPERIENCES
const Experiences = async () => {
	
	// GET THEME
	const theme = await getTheme();
	
	// GET DATA
	const {data} = await getExperiencesData();
	
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