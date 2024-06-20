'use client';

// IMPORTS
import './history.scss';
import Image from 'next/image';
import {P} from '@/components/partials/paragraph/paragraph';
import {Button} from '@/components/partials/button/button';
import {useEffect, useState} from 'react';

// HISTORY
const History = ({className = ''}) => {
	
	// SETUP DATA
	const data = [
		{
			id: 'swiss-army',
			company: 'Swiss Army',
			logo: '/logos/light/swiss-army.png',
			role: 'Transmission Specialist',
			duration: '2023 - 2024',
			description: 'Lorem ipsum dolor sit amet.',
		},
		
		{
			id: 'haas-web-solutions',
			company: 'haas web solutions',
			logo: '/logos/light/haas-web-solutions.png',
			role: 'Founder',
			duration: '2022 - heute',
			description: 'Lorem ipsum dolor sit amet.',
		},
		{
			id: 'calydo',
			company: 'Calydo',
			logo: '/logos/light/calydo.png',
			role: 'Frontend Developer',
			duration: '2021 - 2022',
			description: 'Lorem ipsum dolor sit amet.',
		},
		{
			id: 'codeworkd',
			company: 'Codeworks',
			logo: '/logos/light/codeworks.png',
			role: 'Student',
			duration: '2020 - 2021',
			description: 'Lorem ipsum dolor sit amet.',
		},
		{
			id: 'arcmedia',
			company: 'Arcmedia',
			logo: '/logos/light/arcmedia.png',
			role: 'System Administrator & Frontend Developer',
			duration: '2018 - 2022',
			description: 'Lorem ipsum dolor sit amet.',
		},
	];
	
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
		const {id} = data[0];
		
		// UPDATE STATE
		setProject(id);
		
	}, []);
	
	// RENDER
	return (
	<div className={`${className} history`}>
		<div className='history__navigation navigation'>
			{data.map((item) => (
			<div className={`navigation__item item ${project === item.id ? 'item--active' : ''}`} onClick={() => handleUpdate({id: item.id})} key={item.id}>
				<Image className='item__logo' src={item.logo} width={40} height={40} alt={item.company}/>
				<P className='item__text paragraph--small'>{item.company}</P>
			</div>
			))}
		</div>
		<div className='history__detail detail'>
			{data.filter((item) => project === item.id).map((item) => (
			<div className='detail__item item' key={item.id}>
				<figure className='item__timeline'/>
				<P className='item__role paragraph--big'>{item.role}</P>
				<P className='item__duration'>{item.duration}</P>
				<P className='item__description'>{item.description}</P>
				<Button className='item__button button--dark' href='/references/calydo.pdf' target='_blank'>Download reference</Button>
			</div>
			))}
		</div>
	</div>
	);
	
};

// EXPORTS
export default History;

