'use client';

// IMPORTS
import './project-slider.scss';
import Image from 'next/image';
import {Swiper, SwiperSlide} from 'swiper/react';
import {P} from '@/components/partials/paragraph/paragraph';
import {Autoplay, Grid, Pagination} from 'swiper/modules';
import {Fragment, useEffect, useState} from 'react';
import {Icon} from '@/components/partials/icon/icon';
import {RichText} from '@/components/partials/rich-text/rich-text';

// PROJECT SLIDER
const ProjectSlider = ({className = '', projects = []}) => {
	
	// SETUP STATE
	const [isClient, setIsClient] = useState(false);
	
	// DEFINE BEAKPOINTS-SETTINGS
	const breakpointSettings = {
		0: {slidesPerView: 1, grid: {rows: 2}},
		800: {slidesPerView: 2, grid: {rows: 2}},
		1200: {slidesPerView: 2, grid: {rows: 2}},
	};
	
	// DEFINE AUTOPLAY-SETTINGS
	const autoplaySettings = {
		delay: 8000,
	};
	
	// DEFINE PAGINATION-SETTINGS
	const paginationSettings = {
		clickable: true,
		el: '.project-slider__pagination',
		bulletClass: 'pagination__bullet',
		bulletActiveClass: 'pagination__bullet--active',
	};
	
	// HANDLE OPEN LINK
	const handleOpenLink = ({link}) => {
		
		// OPEN NEW WINDOW
		window.open(link, '_blank');
		
	};
	
	// CHECK FOR CLIENT
	useEffect(() => {
		setIsClient(true);
	}, []);
	
	// RENDER
	return (
	<div className={`${className} project-slider`}>
		{isClient ? (
		<Swiper className='project-slider__slider slider' slidesPerView={2} autoplay={autoplaySettings} breakpoints={breakpointSettings} loop={true} grid={{rows: 2}} spaceBetween={30} pagination={paginationSettings} modules={[Grid, Pagination, Autoplay]}>
			{projects.map((project, index) => (
			<SwiperSlide className='project-slider__slide slide' key={index}>
				<P className='slide__title paragraph--bold'>{project.tiutle}</P>
				<div className='slide__actions actions'>
					{project.links.length ? project.links.map((link, index) => (
					<Fragment key={link.id}>
						{link.type === 'github' ? <Icon className='actions__icon' type='github' onClick={() => handleOpenLink({link: link.url})}/> : null}
						{link.type === 'website' ? <Icon className='actions__icon' type='external-link' onClick={() => handleOpenLink({link: link.url})}/> : null}
					</Fragment>
					)) : null}
				</div>
				<P className='slide__metadata paragraph--small'>{project.type} | {project.year}</P>
				<RichText className='slide__description paragraph--small'>{project?.description}</RichText>
				{project.devicons?.length ? (
				<div className='slide__devicons devicons'>
					{project.devicons.map((devicon) => (
					<Image className='devicons__icon' src={devicon?.white?.data?.attributes?.url} width={40} height={40} alt='Devicon' key={devicon.id}/>
					))}
				</div>) : null}
			</SwiperSlide>
			))}
		</Swiper>
		) : null}
		<div className='project-slider__pagination pagination'></div>
	</div>
	)
	;
	
};

// EXPORTS
export default ProjectSlider;
