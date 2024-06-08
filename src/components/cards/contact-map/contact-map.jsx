'use client';

// IMPORTS
import './contact-map.scss';
import Card from '@/components/layouts/card/card';
import {Map, Marker} from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import {useSearchParams} from 'next/navigation';

// CONTACT MAP
const ContactMap = () => {
	
	// BRING IN SEARCH-PARAMS
	const searchParams = useSearchParams();
	
	// GET THEME
	const theme = searchParams.get('theme');
	
	// GET MAPBOX-TOKEN
	const mapboxToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;
	
	// MAPBOX-STYLES
	const mapboxStyles = {
		light: 'mapbox://styles/mapbox/light-v11',
		dark: 'mapbox://styles/mapbox/dark-v11',
	};
	
	// RENDER
	return (
	<Card className='contact-map'>
		<div className='contact-map__map'>
			<Map className='map__background' mapboxAccessToken={mapboxToken} initialViewState={{latitude: 47.165410, longitude: 8.397860, zoom: 14}} mapStyle={theme === 'dark' ? mapboxStyles['dark'] : mapboxStyles['light']} maxZoom={20} minZoom={12}>
				<Marker className='map__marker marker' latitude={47.165410} longitude={8.397860}>
						<span className='marker__wrapper'>
							<figure className='marker__dot'/>
							<figure className='marker__background'/>
						</span>
				</Marker>
			</Map>
		</div>
	</Card>
	);
	
};

// EXPORTS
export default ContactMap;