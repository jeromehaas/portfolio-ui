'use client';

// IMPORTS
import './text-area.scss';
import {useEffect, useState} from 'react';

// TEXT-INPUT
const TextArea = ({className = '', placeholder = '', id = '', context = null, register = null, required = false, pattern = null, error = null}) => {
	
	// SETUP STATE
	const [isClient, setIsClient] = useState(false);
	
	// CHECK FOR CLIENT
	useEffect(() => {
		setIsClient(true);
	}, []);
	
	// RENDER
	return (
	<div className={`${className} text-area ${error?.[context]?.[id] ? 'text-area--error' : ''}`}>
		{isClient ? (
		<textarea className='text-area__field paragraph' id={id} {...register(`${context}.${id}`, {required: required, pattern: pattern})} placeholder={placeholder}/>
		) : (
		<figure className='text-area__fake-field'/>
		)}
	</div>
	);
	
};

// EXPORTS
export {
	TextArea,
};