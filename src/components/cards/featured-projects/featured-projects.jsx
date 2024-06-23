// IMPORTS
import './featured-projects.scss';
import Card from '@/components/layouts/card/card';
import ProjectSlider from '@/components/elements/project-slider/project-slider';
import {H2} from '@/components/partials/heading/heading';
import {getLanguage} from '@/actions/lang';

// FEATURED PROJECTS
const FeaturedProjects = async () => {
	
	// GET LANGUAGE
	const language = await getLanguage();
	
	// GET DATA
	const response = await fetch(`http://localhost:1337/api/featured-project?locale=${language}&populate[projects][populate][devicons][populate]=*&populate[projects][populate][links][populate]=*`);
	const {data} = await response.json();
	
	// RENDER
	return (
	<Card className='featured-projects'>
		<H2 className='featured-projects__title'>{ data?.attributes?.title }</H2>
		<ProjectSlider className='featured-projects__project-slider' projects={data?.attributes?.projects}/>
	</Card>
	);
	
};

// EXPORTS
export default FeaturedProjects;