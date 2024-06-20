// IMPORTS
import './avatar.scss';
import Image from 'next/image';
import Card from '@/components/layouts/card/card';

// AVATAR
const Avatar = () => {
	
	// RENDER
	return (
	<Card className='avatar'>
		<Image className='avatar__image' src='/images/portrait-jeromehaas.png' alt='Jérôme Haas' priority width='1340' height='1400'/>
	</Card>
	);
	
};

// EXPORTS
export default Avatar;