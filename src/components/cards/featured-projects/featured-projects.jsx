// IMPORTS
import './featured-projects.scss';
import Card from '@/components/layouts/card/card';
import ProjectSlider from '@/components/elements/project-slider/project-slider';
import {H2} from '@/components/partials/heading/heading';

// FEATURED PROJECTS
const FeaturedProjects = () => {
	
	const data = [
		{
			id: 'heller-grafik-web',
			title: 'Heller Grafik | Website',
			year: '2023',
			description: 'Lorem ipsum dolor sit amet',
			links: {
				github: 'https://github.com',
				url: 'https://github.com',
			},
			techStack: ['nextjs', 'javascript', 'scss'],
		},
		{
			id: 'samira-haas-web',
			title: 'Samira Haas | Website',
			year: '2023',
			description: 'Lorem ipsum dolor sit amet',
			links: {
				github: 'https://github.com',
				url: 'https://github.com',
			},
			techStack: ['nextjs', 'javascript', 'scss'],
		},
		{
			id: 'praxis-dietschiberg-web',
			title: 'Praxis Dietschiberg | Website',
			year: '2023',
			description: 'Lorem ipsum dolor sit amet',
			links: {
				github: 'https://github.com',
				url: 'https://github.com',
			},
			techStack: ['nextjs', 'javascript', 'scss'],
		},
		{
			id: 'kr-consulting-web',
			title: 'KR Consulting Website | Website',
			year: '2023',
			description: 'Lorem ipsum dolor sit amet',
			links: {
				github: 'https://github.com',
				url: 'https://github.com',
			},
			techStack: ['nextjs', 'javascript', 'sass'],
		},
		{
			id: 'heller-grafik-web',
			title: 'Heller Grafik | Website',
			year: '2023',
			description: 'Lorem ipsum dolor sit amet',
			links: {
				github: 'https://github.com',
				url: 'https://github.com',
			},
			techStack: ['nextjs', 'javascript', 'scss'],
		},
		{
			id: 'samira-haas-web',
			title: 'Samira Haas | Website',
			year: '2023',
			description: 'Lorem ipsum dolor sit amet',
			links: {
				github: 'https://github.com',
				url: 'https://github.com',
			},
			techStack: ['nextjs', 'javascript', 'scss'],
		},
		{
			id: 'praxis-dietschiberg-web',
			title: 'Praxis Dietschiberg | Website',
			year: '2023',
			description: 'Lorem ipsum dolor sit amet',
			links: {
				github: 'https://github.com',
				url: 'https://github.com',
			},
			techStack: ['nextjs', 'javascript', 'scss'],
		},
		{
			id: 'kr-consulting-web',
			title: 'KR Consulting Website | Website',
			year: '2023',
			description: 'Lorem ipsum dolor sit amet',
			links: {
				github: 'https://github.com',
				url: 'https://github.com',
			},
			techStack: ['nextjs', 'javascript', 'sass'],
		},
	];
	
	// RENDER
	return (
	<Card className='featured-projects'>
		<H2 className='featured-projects__title'>Featured Projects</H2>
		<ProjectSlider className='featured-projects__project-slider' projects={data}/>
	</Card>
	);
	
};

// EXPORTS
export default FeaturedProjects;