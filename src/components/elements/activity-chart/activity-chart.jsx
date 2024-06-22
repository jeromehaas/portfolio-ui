'use client';

// IMPORTS
import './activity-chart.scss';
import {useEffect, useRef, useState} from 'react';
import {P} from '@/components/partials/paragraph/paragraph';

// ACTIVITY-CHART
const ActivityChart = ({className = '', events}) => {
	
	// SETUP REF
	const canvasRef = useRef(null);
	
	// SETUP STATE
	const [viewportWidth, setViewportWidth] = useState();
	

	
	// HANDLE RESIZE
	const handleResize = () => {
		
		// UPDATE STATE
		setViewportWidth(window.innerWidth);
		
	};
	
	// DRAW CHART
	const drawChart = () => {
		
		// GET CONTEXT
		const canvas = canvasRef.current;
		const context = canvas.getContext('2d');
		
		// DEFINE SIZES
		const squareSize = 20;
		const padding = 4;
		
		// DEFINE WIDTH AND HEIGHT OF CANVASS
		canvas.width = canvas.clientWidth;
		canvas.height = canvas.clientHeight;
		
		// CALCULATE HOW MANY ITEMS FIT IN CANVAS
		const columns = Math.floor(canvas.width / (squareSize + padding));
		const rows = Math.floor(canvas.height / (squareSize + padding));
		
		// DRAW SQUARES
		for (let i = 0; i < rows; i++) {
			for (let j = 0; j < columns; j++) {
				context.fillStyle = generateColor(events, i * columns + j);
				context.fillRect(j * (squareSize + padding), i * (squareSize + padding), squareSize, squareSize);
			}
		}
		
	};
	
	// GET RANDOM COLOR
	const getRandomColor = (value, index) => {
		
		// DEFINE PLACEHOLDER
		let randomColor;
		
		// DEFINE COLORS
		const colors = ['757F9A', 'D7DDE8'];
		
		// GET DYNAMIC COLOR
		if (index % 4 === 0) randomColor = colors[0];
		if (index % 4 !== 0) randomColor = colors[1];
		
		// RETURN
		return randomColor;
		
	};
	
	// GENERATE COLOR
	const generateColor = (events, index) => {
		
		// DEFINE PLACEHOLDER
		let color;
		
		// GET BASE-COLOR AND OPACITY
		const baseColor = getRandomColor(events[index], index);
		const opacity = getOpacity(events[index]);
		
		// FORMAT HEX
		color = `#${baseColor}${opacity}`;
		
		// RETURN
		return color;
		
	};
	
	// GET OPACITY
	const getOpacity = (value) => {
		
		// DEFINE PLACEHOLDER
		let opacity;
		
		// GET OPACITY
		if (value === 4) opacity = 'FF';
		if (value === 3) opacity = 'BF';
		if (value === 2) opacity = '80';
		if (value === 1) opacity = '40';
		if (value === 0) opacity = '10';
		
		// RETURN
		return opacity;
		
	};
	
	// ON FIRST RENDER
	useEffect(() => {
		
		// DRAW CHART
		drawChart();
		
		// SETUP EVENT-LISTENER FOR WINDOW-RESIZE
		window.addEventListener('resize', handleResize);
		
		// REMOVE EVENT-LISTENER
		return () => {
			window.removeEventListener('resize', handleResize);
		};
		
	}, [viewportWidth]);
	
	// RENDER
	return (
	<div className={`${className} activity-chart`}>
		<canvas className='activity-chart__graph' ref={canvasRef}/>
	</div>
	);
};

// EXPORTS
export default ActivityChart;