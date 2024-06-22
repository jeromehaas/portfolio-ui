'use client';

// IMPORTS
import './kroki.scss';
import {useSearchParams} from 'next/navigation';
import {Map, Marker} from 'react-map-gl';

// KROKI
const Kroki = ({className = '', coordinates = null}) => {
	
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
	<div className={`${className} kroki`}>
		<Map className='kroki__background' mapboxAccessToken={mapboxToken} initialViewState={{latitude: coordinates?.latitude, longitude: coordinates.longitude, zoom: 14}} mapStyle={theme === 'dark' ? mapboxStyles['dark'] : mapboxStyles['light']} maxZoom={20} minZoom={12}>
			<Marker className='kroki__marker marker' latitude={coordinates?.latitude} longitude={coordinates?.longitude}>
					<span className='marker__wrapper'>
						<figure className='marker__dot'/>
						<figure className='marker__background'/>
					</span>
			</Marker>
		</Map>
	</div>
	);
	
};

// EXPORTS
export default Kroki;