'use client';

// IMPORTS
import './clock.scss';
import {useEffect, useRef} from 'react';

// HELLO LANGUAGE-TOGGLE
const Clock = ({className = ''}) => {
	
	// SETUP REF
	const canvasRef = useRef(null);
	
	// DRAW CLOCK
	const drawClock = () => {
		
		// GET CANVAS CONTEXT
		const canvas = canvasRef.current;
		const ctx = canvas.getContext('2d');
		
		// GET RADIUS
		const radius = canvas.height / 2;
		
		// RESET CANVAS
		ctx.setTransform(1, 0, 0, 1, 0, 0);
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		ctx.translate(radius, radius);
		
		// DRAW
		drawFace(ctx, radius);
		drawTicks(ctx, radius);
		drawTime(ctx, radius);
		
	};
	
	// DRAW FACE
	const drawFace = (ctx, radius) => {
		
		// SET STYLES
		ctx.fillStyle = 'transparent';
		
		// DRAW
		ctx.beginPath();
		ctx.arc(0, 0, radius, 0, 2 * Math.PI);
		ctx.fill();
		ctx.beginPath();
		
	};
	
	// DRAW TICKS
	const drawTicks = (ctx, radius) => {
		
		// SET STYLES
		ctx.strokeStyle = 'black';
		ctx.lineWidth = 2;
		
		// DRAW
		for (let num = 1; num <= 12; num++) {
			ctx.rotate((num * Math.PI) / 6);
			ctx.moveTo(0, -radius);
			ctx.lineTo(0, -radius + 16);
			ctx.stroke();
			ctx.rotate(-(num * Math.PI) / 6);
		}
		
	};
	
	// DRAW TIME
	const drawTime = (ctx, radius) => {
		
		// GET CURRENT TIME
		const now = new Date();
		let hour = now.getHours();
		let minute = now.getMinutes();
		let second = now.getSeconds();
		
		// CALCULATE TIME
		hour = ((hour % 12) * Math.PI) / 6 + (minute * Math.PI) / (6 * 60) + (second * Math.PI) / (360 * 60);
		minute = (minute * Math.PI) / 30 + (second * Math.PI) / (30 * 60);
		second = (second * Math.PI) / 30;
		
		// DRAW TIME
		drawHand(ctx, hour, radius * 0.5, radius * 0.07, '#292a2c');
		drawHand(ctx, minute, radius * 0.8, radius * 0.07, '#292a2c');
		drawHand(ctx, second, radius * 0.9, radius * 0.02, '#DD0F0F');
		
	};
	
	// DRAW HAND
	const drawHand = (ctx, pos, length, width, color) => {
		
		// SET STYLES
		ctx.lineCap = 'round';
		ctx.shadowColor = 'transparent';
		ctx.lineWidth = width;
		ctx.strokeStyle = color;
		
		// DRAW
		ctx.beginPath();
		ctx.moveTo(0, 0);
		ctx.rotate(pos);
		ctx.lineTo(0, -length);
		ctx.stroke();
		ctx.rotate(-pos);
		
	};
	
	// ON FIRST RENDER
	useEffect(() => {
		
		// DRAW CLOCK
		drawClock();
		
		// PRINT CLOCK EVERY SECOND
		const intervalId = setInterval(drawClock, 1000);
		
		// CLEAN-UP
		return () => clearInterval(intervalId);
		
	}, []);
	
	// RENDER
	return (
	<div className={`${className} clock`}>
		<canvas className='clock__canvas' ref={canvasRef} width={120} height={120}/>
	</div>
	);
	
};

// EXPORTS
export default Clock;