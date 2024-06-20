// IMPORTS
import {useEffect, useRef, useState} from 'react';

// USE-AUDIO-ANALYSER
const useAudioAnalyser = (audioRef = null, isPlaying = false) => {
	const [analyserNode, setAnalyserNode] = useState(null);
	const audioContextRef = useRef(null);
	const sourceRef = useRef(null);
	
	// ON UPDATE
	useEffect(() => {
		
		// CHECK FOR AUDIO-REF AND PLAY-STATE
		if (audioRef.current && isPlaying && !analyserNode) {
			
			// GET AUDIO-CONTEXT
			if (!audioContextRef.current) {
				audioContextRef.current = new (window.AudioContext || window.webkitAudioContext)();
			}
			
			// GET ELEMENT-SOURCE
			if (!sourceRef.current) {
				sourceRef.current = audioContextRef.current.createMediaElementSource(audioRef.current);
			}
			
			// CONNECT AUDIO-ANALYSER
			const analyser = audioContextRef.current.createAnalyser();
			sourceRef.current.connect(analyser);
			analyser.connect(audioContextRef.current.destination);
			
			// UPDATE ANALYSER NODE
			setAnalyserNode(analyser);
			
		}
		
	}, [audioRef, isPlaying, analyserNode]);
	
	// RETURN
	return analyserNode;
	
};

// EXPORTS
export default useAudioAnalyser;