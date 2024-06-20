'use client';

// IMPORTS
import './music-player.scss';
import {useEffect, useRef, useState} from 'react';
import {P} from '@/components/partials/paragraph/paragraph';
import {Icon} from '@/components/partials/icon/icon';
import useAudioAnalyser from '@/hooks/use-audio-analyser';
import {useSearchParams} from 'next/navigation';

// MUSIC-PLAYER
const MusicPlayer = ({className = ''}) => {
	
	// SETUP STATE
	const [isPlaying, setIsPlaying] = useState(false);
	
	// SETUP REFS
	const audioRef = useRef();
	
	// GET SEARCH PARAMS
	const searchParams = useSearchParams();
	
	// GET ANALYSER-NODE
	const analyserNode = useAudioAnalyser(audioRef, isPlaying);
	
	// GET THEME
	const theme = searchParams.get('theme');
	
	// HANDLE TOGGLE PLAY
	const handleTogglePlay = () => {
		const audio = audioRef.current;
		if (isPlaying) {
			setIsPlaying(false);
			audio.pause();
		} else {
			setIsPlaying(true);
			audio.play();
		}
	};
	
	// HANDLE ENEDED
	const handleReset = () => {
		
		// UPDATE STATE
		setIsPlaying(false);
		
	};
	
	// RENDER FRAME
	const renderFrame = () => {
		
		// CHECK FOR ANYLYSER-NODE
		if (!analyserNode) return;
		
		// GET CONTAINER AND CANVAS
		const container = document.querySelector('.music-player__visualizer-wrapper');
		const oldCanvas = document.querySelector('.music-player__visualizer-wrapper canvas');
		
		// REMOVE EXISTING CANVAS
		if (oldCanvas) oldCanvas.remove();
		
		// CREATE NEW CANVAS
		let canvas = document.createElement('canvas');
		canvas.width = 480;
		canvas.height = 320;
		container?.appendChild(canvas);
		
		// CREATE CONTEXT AND BUFFER
		let ctx = canvas?.getContext('2d');
		let bufferLength = analyserNode.frequencyBinCount;
		let dataArray = new Uint8Array(bufferLength);
		
		// DEFINE FFT-SIZE
		analyserNode.fftSize = 256;
		
		// RECURSIVE CALL
		requestAnimationFrame(renderFrame);
		
		// DEFINE BAR-WIDTH
		let barWidth = (canvas.width / bufferLength) * 8;
		let barHeight;
		
		// DEFINE LOOP
		let x = 0;
		
		// UPDATE FREQUECY-DATA
		analyserNode.getByteFrequencyData(dataArray);
		
		// PRINT BACKGROUND
		ctx.fillStyle = theme === 'dark' ? '#333333' : '#FFFFFF';
		ctx.fillRect(0, 0, canvas.width, canvas.height);
		
		// LOOP OVER FREQUENCIES
		for (let i = 0; i < bufferLength; i++) {
			barHeight = dataArray[i];
			ctx.fillStyle = '#FDBB2D';
			ctx.fillRect(x, canvas.height - barHeight, barWidth, barHeight);
			x += barWidth + 1;
		}
		
	};
	
	// RUN WHEN ANYLYSER-NODE IS UPDATED
	useEffect(() => {
		
		// RENDER FRAME
		renderFrame();
		
	}, [analyserNode, searchParams]);
	
	// RENDER
	return (
	<div className={`${className} music-player`}>
		<div className='music-player__visualizer-wrapper' id='music-player__visualizer-wrapper'></div>
		<audio ref={audioRef} crossOrigin='anonymous' src='/audio/session-add.mp3' onEnded={handleReset}/>
		<div className='music-player__details details'>
			<div className='details__controller' onClick={handleTogglePlay}>
				{isPlaying ? <Icon className='controller__icon' type='pause'/> : <Icon className='controller__icon' type='play'/>}
			</div>
			<P className='details__title'>Skee Mask | Session Add</P>
		</div>
	</div>
	);
};

// EXPORTS
export default MusicPlayer;

