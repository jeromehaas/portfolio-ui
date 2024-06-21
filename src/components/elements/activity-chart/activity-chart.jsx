'use client';

// IMPORTS
import './activity-chart.scss';
import {useEffect, useRef} from 'react';

// ACTIVITY-CHART
const ActivityChart = ({className = ''}) => {
	
	// SETUP REF
	const canvasRef = useRef(null);
	
	// DEFINE DATA
	const data = [
		0, 1, 4, 1, 4, 2, 2, 0, 4, 1, 0, 2, 2, 4, 4, 3, 1, 2, 2, 0, 4, 1, 3, 4, 4, 0,
		3, 2, 4, 0, 1, 4, 0, 2, 4, 2, 1, 0, 0, 2, 3, 1, 4, 0, 4, 2, 4, 3, 3, 1, 3, 3,
		3, 2, 0, 3, 0, 3, 4, 1, 0, 0, 4, 2, 4, 1, 1, 1, 1, 4, 0, 0, 1, 4, 1, 2, 2, 0,
		1, 3, 2, 1, 0, 0, 0, 2, 0, 2, 1, 0, 0, 1, 0, 2, 2, 3, 2, 0, 2, 0, 1, 3, 2, 0,
		0, 0, 3, 0, 1, 2, 1, 1, 0, 3, 2, 3, 3, 0, 0, 4, 3, 0, 0, 2, 4, 0, 1, 3, 4, 4,
		1, 3, 2, 0, 4, 2, 2, 2, 3, 2, 1, 2, 4, 0, 2, 3, 4, 0, 0, 3, 0, 0, 0, 0, 0, 4,
		2, 0, 4, 2, 0, 0, 0, 1, 3, 4, 1, 4, 0, 2, 1, 4, 2, 1, 0, 1, 2, 1, 3, 2, 1, 4,
		3, 0, 4, 2, 2, 4, 3, 1, 1, 0, 1, 3, 4, 4, 3, 3, 0, 0, 1, 0, 2, 3, 1, 0, 0, 0,
		3, 3, 2, 3, 0, 0, 0, 1, 2, 3, 1, 2, 2, 2, 0, 0, 0, 2, 0, 1, 2, 1, 1, 0, 3, 4,
		0, 0, 3, 0, 1, 2, 1, 1, 0, 3, 2, 3, 3, 0, 0, 4, 3, 0, 0, 2, 4, 0, 1, 3, 4, 4,
		1, 3, 2, 0, 4, 2, 2, 2, 3, 2, 1, 2, 4, 0, 2, 3, 4, 0, 0, 3, 0, 0, 0, 0, 0, 4,
		3, 2, 0, 3, 0, 3, 4, 1, 0, 0, 4, 2, 4, 1, 1, 1, 1, 4, 0, 0, 1, 4, 1, 2, 2, 0,
	];
	
	// GET RANDOM COLOR
	const getRandomColor = (index) => {
		
		// DEFINE PLACEHOLDER
		let randomColor;
		
		// DEFINE COLORS
		const colors = ['22C1C3', 'FDBB2D']; // green and yellow colors in hex without '#'
		
		// GET DYNAMIC COLOR
		if (index % 4 === 0) randomColor = colors[0];
		if (index % 4 !== 0) randomColor = colors[1];
		
		// RETURN
		return randomColor;
		
	};
	
	// GENERATE COLOR
	const generateColor = (index) => {
		
		// DEFINE PLACEHOLDER
		let color;
		
		// GET BASE-COLOR AND OPACITY
		const baseColor = getRandomColor(index);
		const opacity = getOpacity(data[index]);
		
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
		if (value === 0) opacity = '00';
		
		// RETURN
		return opacity;
		
	};
	
	// ON FIRST RENDER
	useEffect(() => {
		
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
				context.fillStyle = generateColor(i * columns + j);
				context.fillRect(j * (squareSize + padding), i * (squareSize + padding), squareSize, squareSize);
			}
		}
		
	}, []);
	
	// RENDER
	return (
	<div className={`${className} activity-chart`} onResize={() => console.log('resize')}>
		<canvas className='activity-chart__graph' ref={canvasRef}/>
	</div>
	);
};

// EXPORTS
export default ActivityChart;