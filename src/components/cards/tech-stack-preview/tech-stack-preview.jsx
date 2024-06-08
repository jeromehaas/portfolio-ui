'use client';

// IMPORTS
import './tech-stack-preview.scss';
import dictionary from './dictionary.json';
import Card from '@/components/layouts/card/card';
import {useParams} from 'next/navigation';
import {Devicon} from '@/components/partials/devicon/devicon';

// EXPERIENCES PREVIEW
const TechStackPreview = () => {
	
	// BRING IN PARAMS
	const params = useParams();
	
	// GET LANGUAGE
	const {lang} = params;
	
	// RENDER
	return (
	<>
		{dictionary[lang].items.map((item) => (
		<Card className='tech-stack-preview' key={item.id}>
			<Devicon className='tech-stack-preview__devicon' type={item.id}/>
		</Card>
		))}
	</>
	);
	
};

// EXPORTS
export default TechStackPreview;