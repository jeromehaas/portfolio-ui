// IMPORTS
import './tech-stack.scss';
import Card from '@/components/layouts/card/card';
import DeviconSlider from '@/components/elements/devicon-slider/devicon-slider';
import {H2} from '@/components/partials/heading/heading';

// EXPERIENCES PREVIEW
const TechStack = () => {
	
	const data = {
		devicons: [
			'javascript',
			'sass',
			'html',
			'nextjs',
			'astro',
			'css',
			'git',
			'react',
			'jasmine',
			'bash',
			'vscode',
			'vim',
			'rxjs',
			'typescript',
			'mongodb',
			'npm',
		],
	};
	
	// RENDER
	return (
	<Card className='tech-stack'>
		<H2 className='tech-stack__title'>Tech Stack</H2>
		<DeviconSlider className='tech-stack__devicon-slider' devicons={data.devicons}/>
	</Card>
	);
	
};

// EXPORTS
export default TechStack;