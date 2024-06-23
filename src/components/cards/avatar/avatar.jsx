// IMPORTS
import './avatar.scss';
import Image from 'next/image';
import Card from '@/components/layouts/card/card';
import {P} from '@/components/partials/paragraph/paragraph';

// AVATAR
const Avatar = () => {
	
	// RENDER
	return (
	<Card className='avatar'>
		<Image className='avatar__image' src='/images/jeromehaas.png' alt='Jérôme Haas' priority width='1340' height='1400'/>
		<P className='avatar__filename paragraph paragraph--bold'>jeromehaas.png</P>
	</Card>
	);
	
};

// EXPORTS
export default Avatar;