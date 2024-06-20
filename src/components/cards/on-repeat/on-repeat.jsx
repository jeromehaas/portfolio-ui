// IMPORTS
import './on-repeat.scss';
import Card from '@/components/layouts/card/card';
import MusicPlayer from '@/components/elements/music-player/music-player';
import {H2} from '@/components/partials/heading/heading';

// ON REPEAT
const OnRepeat = () => {
	
	// RENDER
	return (
	<Card className='on-repeat'>
		<H2 className='on-repeat__title'>On Repeat</H2>
		<MusicPlayer className='on-repeat__music-player'/>
	</Card>
	);
	
};

// EXPORTS
export default OnRepeat;