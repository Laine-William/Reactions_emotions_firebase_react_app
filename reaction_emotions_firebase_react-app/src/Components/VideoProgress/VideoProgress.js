import React from 'react';

import videoAlien from "../../Assets/Videos/alien.mp4";

import * as faceapi from 'face-api.js';

import {
    useEffect,
    useRef,
    useState
} from 'react';

const VideoProgress = () => {

    const videoHeight = 0;
    const videoWidth = 0;

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

    const handleFilm = () => {

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
        <div className="video-wrapper">
            <div className="emoticon-wrapper"> {expression} </div>
                <video autoPlay controls onPlay = {handleFilm}>
                    <source src={ videoAlien } type="video/mp4" />
                </video>
                
                <div className = "position-video-none">
                    <video ref = {videoRef} autoPlay muted 
                                            height = {videoHeight} 
                                            width = {videoWidth} />

                    <canvas ref = {canvasRef} 
                            className = "position-canvas" 
                    />
                </div>
            </div>
        </div>
    );
};

export default VideoProgress;