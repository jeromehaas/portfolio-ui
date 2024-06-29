'use client';

// IMPORTS
import './kroki.scss';
import {useSearchParams} from 'next/navigation';
import {Map, Marker} from 'react-map-gl';
import {useEffect, useState} from 'react';

// KROKI
const Kroki = ({className = '', coordinates = null}) => {
	
	// SETUP STATE
	const [isClient, setIsClient] = useState(true);
	
	// BRING IN SEARCH-PARAMS
	const searchParams = useSearchParams();
	
	// GET THEME
	const theme = searchParams.get('theme');
	
	// GET MAPBOX-TOKEN
	const mapboxToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;
	
	// MAPBOX-STYLES
	const mapboxStyles = {
		dark: 'mapbox://styles/jeromehaas/clxrqxnho005b01pa0kcphg9m',
		light: 'mapbox://styles/jeromehaas/clxrrqmcl00pf01qm34bzbwqh',
	};
	
	// ON FIRST RENDER
	useEffect(() => {
		
		// UPDATE STATE
		setIsClient(true);
		
	}, []);
	
	// RENDER
	return (
	<div className={`${className} kroki`}>
		{isClient ? (
		<Map className='kroki__background' mapboxAccessToken={mapboxToken} initialViewState={{latitude: coordinates?.latitude, longitude: coordinates.longitude, zoom: 12}} mapStyle={theme === 'dark' ? mapboxStyles['dark'] : mapboxStyles['light']} maxZoom={20} minZoom={7}>
			<Marker className='kroki__marker marker' latitude={coordinates?.latitude} longitude={coordinates?.longitude}>
					<span className='marker__wrapper'>
						<figure className='marker__dot'/>
						<figure className='marker__background'/>
					</span>
			</Marker>
		</Map>
		) : null}
	</div>
	);
	
};

// EXPORTS
export default Kroki;