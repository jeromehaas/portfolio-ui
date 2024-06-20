'use client';

// IMPORTS
import './project-slider.scss';
import {Swiper, SwiperSlide} from 'swiper/react';
import {P} from '@/components/partials/paragraph/paragraph';
import {Autoplay, Grid, Pagination} from 'swiper/modules';
import {Devicon} from '@/components/partials/devicon/devicon';
import {Icon} from '@/components/partials/icon/icon';
import {useEffect, useState} from 'react';

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
				<P className='slide__title'>{project.title}</P>
				{project.links?.github || project.links?.url ? (
				<div className='slide__actions actions'>
					{project.links?.github ? <Icon className='actions__icon' type='github' onClick={() => handleOpenLink({link: project.links.github})}/> : null}
					{project.links?.github ? <Icon className='actions__icon' type='external-link' onClick={() => handleOpenLink({link: project.links.url})}/> : null}
				</div>) : null}
				<P className='slide__year paragraph--small'>{project.year}</P>
				<P className='slide__description paragraph--small'>{project.description}</P>
				{project.techStack.length ? (
				<div className='slide__devicons devicons'>
					{project.techStack.map((item, index) => (
					<Devicon className='devicons__icon' type={item} key={index}/>
					))}
				</div>) : null}
			</SwiperSlide>
			))}
		</Swiper>
		) : null}
		<div className='project-slider__pagination pagination'></div>
	</div>
	);
	
};

// EXPORTS
export default ProjectSlider;
