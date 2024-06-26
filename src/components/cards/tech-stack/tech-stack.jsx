// IMPORTS
import './tech-stack.scss';
import Card from '@/components/layouts/card/card';
import DeviconSlider from '@/components/elements/devicon-slider/devicon-slider';
import {H2} from '@/components/partials/heading/heading';
import {getTheme} from '@/actions/theme';
import {getTechStackData} from '@/services/get-tech-stack-data';

// EXPERIENCES PREVIEW
const TechStack = async () => {
	
	// GET THEME
	const theme = await getTheme();
	
	// GET DATA
	const {data} = await getTechStackData();
	
	// RENDER
	return (
	<Card className='tech-stack'>
		<H2 className='tech-stack__title'>{data?.attributes?.title}</H2>
		<DeviconSlider className='tech-stack__devicon-slider' devicons={data?.attributes?.devicons} theme={theme}/>
	</Card>
	);
	
};

// EXPORTS
export default TechStack;