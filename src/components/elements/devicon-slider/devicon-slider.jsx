'use client';

// IMPORTS
import './devicon-slider.scss';
import {Devicon} from '@/components/partials/devicon/devicon';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Autoplay, Pagination} from 'swiper/modules';
import {useEffect, useState} from 'react';

// DEVICON SLIDER
const DeviconSlider = ({className = '', devicons = []}) => {
	
	// SETUP STATE
	const [isClient, setIsClient] = useState(false);
	
	// DEFINE BEAKPOINT-SETTINGS
	const breakpointSettings = {
		0: {slidesPerView: 3},
		400: {slidesPerView: 4},
		800: {slidesPerView: 6},
		1200: {slidesPerView: 9},
	};
	
	// DEFINE AUTOPLAY-SETTINGS
	const autoplaySettings = {
		delay: 4000,
	};
	
	// CHECK FOR CLIENT
	useEffect(() => {
		setIsClient(true);
	}, []);
	
	// RENDER
	return (
	<div className='devicon-slider'>
		{isClient ? (
		<Swiper className={`${className} devicon-slider__slider slider`} spaceBetween={24} loop={true} speed={500} autoplay={autoplaySettings} breakpoints={breakpointSettings} modules={[Pagination, Autoplay]}>
			{devicons.map((devicon, index) => (
			<SwiperSlide className='devicon-slider__slide slide' key={index}>
				<Devicon className='slide__icon' type={devicon} key={index}/>
			</SwiperSlide>
			))}
		</Swiper>
		) : null}
	</div>
	);
};

// EXPORTS
export default DeviconSlider;