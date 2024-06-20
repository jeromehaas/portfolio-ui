// IMPORTS
import './introduction.scss';
import Image from 'next/image';
import Card from '@/components/layouts/card/card';
import {H1} from '@/components/partials/heading/heading';
import {P} from '@/components/partials/paragraph/paragraph';
import {Highlight} from '@/components/partials/highlight/highlight';
import {getTheme} from '@/actions/theme';

// INTRODUCTION
const Introduction = async() => {
	
	// GET THEME
	const theme = await getTheme();
	
	// RENDER
	return (
	<Card className={'introduction'}>
		<H1 className='introduction__title title'>Nice to meet you! <br/>My name is <br/> <Highlight className='introduction__title-hightlight'>Jérôme Haas</Highlight> <br/> and I love to build solutions for the web.</H1>
		<P className='introduction__text text'>Lorem ipsum <Highlight className='introduction__text-hightlight'>dolor</Highlight> sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. Lorem ipsum dolor sit amet, <Highlight className='introduction__text-hightlight'>consectetur</Highlight> adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore <Highlight className='introduction__text-hightlight'>magna aliqua</Highlight>. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</P>
		<Image className='introduction__signature' src={`/graphics/${theme === 'dark' ? 'light' : 'dark'}/signature.svg`} width='100' height='100' alt='Signature'/>
	</Card>
	);
	
};

// EXPORTS
export default Introduction;