// IMPORTS
import Section from '@/components/layouts/section/section';
import TechStackIntroduction from '@/components/cards/tech-stack-introduction/tech-stack-introduction';
import TechStackPreview from '@/components/cards/tech-stack-preview/tech-stack-preview';

// TECH-STACK
const TechStack = ({params}) => {
	
	// GET LANGUAGE
	const {lang} = params;
	
	// RENDER
	return (
	<Section>
		<TechStackIntroduction lang={lang}/>
		<TechStackPreview lang={lang}/>
	</Section>
	);
	
};

// EXPORTS
export default TechStack;