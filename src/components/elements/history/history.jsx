'use client';

// IMPORTS
import './history.scss';
import Image from 'next/image';
import {P} from '@/components/partials/paragraph/paragraph';
import {Button} from '@/components/partials/button/button';
import {useEffect, useState} from 'react';
import {RichText} from '@/components/partials/rich-text/rich-text';

// HISTORY
const History = ({className = '', history = [], theme = 'light'}) => {
	
	// SETUP STATE
	const [project, setProject] = useState();
	
	// HANDLE UPDATE
	const handleUpdate = ({id}) => {
		
		// UPDATE STATE
		setProject(id);
		
	};
	
	// SET PRIMARY PROJECT
	useEffect(() => {
		
		// GET IF OF FIRST PROJECT
		const {id} = history[0];
		
		// UPDATE STATE
		setProject(id);
		
	}, []);
	
	// RENDER
	return (
	<div className={`${className} history`}>
		<div className='history__navigation navigation'>
			{history.map((job) => (
			<div className={`navigation__item item ${project === job.id ? 'item--active' : ''}`} onClick={() => handleUpdate({id: job.id})} key={job.id}>
				{ theme === 'dark' && <Image className='item__logo logo' src={job?.logo?.white?.data?.attributes?.url} width={40} height={40} alt={job.company}/> }
				{ theme === 'light' && <Image className='item__logo logo' src={job?.logo?.black?.data?.attributes?.url} width={40} height={40} alt={job.company}/> }
				<P className='item__text paragraph--small'>{job.company}</P>
			</div>
			))}
		</div>
		<div className='history__detail detail'>
			{history.filter((job) => project === job?.id).map((item) => (
			<div className='detail__item item' key={item?.id}>
				<figure className='item__timeline'/>
				<P className='item__role paragraph--big'>{item?.role}</P>
				<P className='item__duration'>{item?.duration}</P>
				<RichText className='item__description'>{item?.description}</RichText>
				{ item?.reference && <Button className='item__button button--dark' href={item?.reference?.href} target='_blank'>{item?.reference?.label}</Button>}
			</div>
			))}
		</div>
	</div>
	);
	
};

// EXPORTS
export default History;

