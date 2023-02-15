import React from 'react';

import * as faceapi from 'face-api.js';

import {
    useEffect,
    useRef,
    useState
} from 'react';

const VideoWebcam = () => {

    const videoHeight = 288;
    const videoWidth = 384;

    const videoRef = useRef ();
    const canvasRef = useRef ();

    const icons = {

        neutral: "😶",
        happy: "😄",
        sad: "😞",
        angry: "🤬",
        fearful: "😖",
        disgusted: "🤢",
        surprised: "😲"
    };

    const [expression, setExpression] = useState([]);

    const startVideo = () => {

        navigator.getUserMedia ({
            
            video: {},
        },

        (stream) => (videoRef.current.srcObject = stream),

        (error) => console.log(error)
        );
    };

    useEffect(() => {

        const loadModels = async () => {

            const MODEL_URL = '/models';

            Promise.all (
                [
                    await faceapi.loadSsdMobilenetv1Model (MODEL_URL),
                    await faceapi.loadFaceExpressionModel (MODEL_URL),
                    await faceapi.loadFaceLandmarkModel (MODEL_URL),
                    await faceapi.loadFaceRecognitionModel (MODEL_URL)
                ]
            )

            .then (startVideo);
        }

        loadModels ();
    }, []);

    const handleVideo = () => {

        setInterval (async () => {

            canvasRef.current.innerHTML = faceapi.createCanvasFromMedia (videoRef.current);

            const displaySize = { width: videoWidth, 
                                  height: videoHeight };

            faceapi.matchDimensions (canvasRef.current, displaySize);

            const faceDetection = await faceapi.detectAllFaces (videoRef.current, new faceapi.SsdMobilenetv1Options ()).withFaceLandmarks ()
                                                                                                                       .withFaceExpressions ();
            
            if (faceDetection) {

                const expression = faceDetection[0].expressions.asSortedArray();
            
                // console.log(expression);

                const sumExpressions = expression.reduce(
                
                    (accumulation, {expression, probability}) => {
                
                        accumulation.push([expression, /*probability*/]);
            
                        // console.log(accumulation);

                        return accumulation; 
                    }, []
                );

                const firstExpression = sumExpressions.shift();
            
                setExpression(icons[firstExpression]);
            }

            const resizedDetections = faceapi.resizeResults(faceDetection, displaySize);

            canvasRef.current.getContext ('2d')
                             .clearRect (0, 0, videoWidth, videoHeight);

            faceapi.draw.drawDetections (canvasRef.current, resizedDetections);

            faceapi.draw.drawFaceExpressions (canvasRef.current, resizedDetections);
            
        }, 1000);
    };

    return (

        <div className="text-center">
            <div className = "video-wrapper">
                <div className="emoticon-wrapper"> {expression} </div>
     
                <div className = "position-video">
                    <video ref = {videoRef} autoPlay muted 
                                            height = {videoHeight} 
                                            width = {videoWidth}
                                            onPlay = {handleVideo} 
                    />

                    <canvas ref = {canvasRef} 
                            className = "position-canvas" 
                    />
                </div>
            </div>      
        </div>
    );
};

export default VideoWebcam;