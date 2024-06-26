// IMPORTS
import './introduction.scss';
import Image from 'next/image';
import Card from '@/components/layouts/card/card';
import {getTheme} from '@/actions/theme';
import {RichText} from '@/components/partials/rich-text/rich-text';
import {getIntroductionData} from '@/services/get-introduction-data';

// INTRODUCTION
const Introduction = async () => {
	
	// GET THEME
	const theme = await getTheme();
	
	// GET DATA
	const {data} = await getIntroductionData();
	
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