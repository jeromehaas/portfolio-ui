// IMPORTS
import './introduction.scss';
import Image from 'next/image';
import Card from '@/components/layouts/card/card';
import {getTheme} from '@/actions/theme';
import {getLanguage} from '@/actions/lang';
import {RichText} from '@/components/partials/rich-text/rich-text';

// INTRODUCTION
const Introduction = async () => {
	
	// GET THEME
	const theme = await getTheme();
	
	// GET LANGUAGE
	const language = await getLanguage();
	
	// GET DATA
	const response = await fetch(`http://localhost:1337/api/introduction?locale=${language}`);
	const {data} = await response.json();
	
	// RENDER
	return (
	<Card className={'introduction'}>
		<RichText className='introduction__title'>{data?.attributes?.title}</RichText>
		<RichText className='introduction__text'>{data?.attributes?.text}</RichText>
		<Image className='introduction__signature' src={`/graphics/${theme === 'dark' ? 'light' : 'dark'}/signature.svg`} width='100' height='100' alt='Signature'/>
	</Card>
	);
	
};

// EXPORTS
export default Introduction;