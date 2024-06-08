'use client';

// IMPORTS
import './text-input.scss';
import {useEffect, useState} from 'react';

// TEXT-INPUT
const TextInput = ({className, placeholder, id, context, register, required, pattern, error}) => {
	
	// SETUP STATE
	const [isClient, setIsClient] = useState(false);
	
	// CHECK FOR CLIENT
	useEffect(() => {
		setIsClient(true);
	}, []);
	
	// RENDER
	return (
	<div className={`${className} text-input ${error?.[context]?.[id] ? 'text-input--error' : ''}`}>
		{isClient ? (
		<input className='text-input__field paragraph' type='text' id={id} {...register(`${context}.${id}`, {required: required, pattern: pattern})} placeholder={placeholder}/>
		) : (
		<figure className='text-input__fake-field'/>
		)}
	</div>
	);
	
};

// EXPORTS
export {
	TextInput,
};