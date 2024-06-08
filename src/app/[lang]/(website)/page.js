'use client';

// IMPORTS
import Section from '@/components/layouts/section/section';
import HelloIntroduction from '@/components/cards/hello-intoduction/hello-introduction';
import HelloWorks from '@/components/cards/hello-works/hello-works';
import HelloTechStack from '@/components/cards/hello-tech-stack/hello-tech-stack';
import HelloQuote from '@/components/cards/hello-quote/hello-quote';
import HelloExperiences from '@/components/cards/hello-experiences/hello-experiences';
import HelloContact from '@/components/cards/hello-contact/hello-contact';
import HelloThemeToggle from '@/components/cards/hello-theme-toggle/hello-theme-toggle';
import HelloLanguageToggle from '@/components/cards/hello-language-toggle/hello-language-toggle';
import HelloImage from '@/components/cards/hello-image/hello-image';

// HELLO
const Hello = () => {
	
	// RENDER
	return (
	<Section>
		<HelloIntroduction/>
		<HelloImage/>
		<HelloWorks/>
		<HelloQuote/>
		<HelloThemeToggle/>
		<HelloExperiences/>
		<HelloTechStack/>
		<HelloLanguageToggle/>
		<HelloContact/>
	</Section>
	);
	
};

// EXPORTS
export default Hello;
