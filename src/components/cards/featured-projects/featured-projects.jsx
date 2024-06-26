// IMPORTS
import './featured-projects.scss';
import Card from '@/components/layouts/card/card';
import ProjectSlider from '@/components/elements/project-slider/project-slider';
import {H2} from '@/components/partials/heading/heading';
import {getFeaturedProjectsData} from '@/services/get-featured-projects-data.js';

// FEATURED PROJECTS
const FeaturedProjects = async () => {
	
	// GET DATA
	const {data} = await getFeaturedProjectsData();
	
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