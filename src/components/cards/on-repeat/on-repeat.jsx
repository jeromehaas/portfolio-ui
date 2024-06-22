// IMPORTS
import './on-repeat.scss';
import Card from '@/components/layouts/card/card';
import MusicPlayer from '@/components/elements/music-player/music-player';
import {H2} from '@/components/partials/heading/heading';
import {getTheme} from '@/actions/theme';
import {getLanguage} from '@/actions/lang';

// ON REPEAT
const OnRepeat = async () => {
	
	// GET THEME
	const theme = await getTheme();
	
	// GET LANGUAGE
	const language = await getLanguage();
	
	// GET DATA
	const response = await fetch(`http://localhost:1337/api/on-repeat?locale=${language}&populate[song][populate]=*`);
	const {data} = await response.json();
	
	// RENDER
	return (
	<Card className='on-repeat'>
		<H2 className='on-repeat__title'>{data?.attributes?.title}</H2>
		<MusicPlayer className='on-repeat__music-player' song={data?.attributes?.song} theme={theme}/>
	</Card>
	);
	
};

// EXPORTS
export default OnRepeat;