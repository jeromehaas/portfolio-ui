// IMPORTS
import './tech-stack.scss';
import Card from '@/components/layouts/card/card';
import DeviconSlider from '@/components/elements/devicon-slider/devicon-slider';
import {H2} from '@/components/partials/heading/heading';
import {getLanguage} from '@/actions/lang';
import {getTheme} from '@/actions/theme';

// EXPERIENCES PREVIEW
const TechStack = async () => {
	
	// GET THEME
	const theme = await getTheme();
	
	// GET LANGUAGE
	const language = await getLanguage();
	
	// GET DATA
	const response = await fetch(`http://localhost:1337/api/tech-stack?locale=${language}&populate[devicons][populate]=*`);
	const {data} = await response.json();
	
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