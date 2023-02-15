import React from 'react';

import Button from '../../Components/Button/Button';

import VideoWebcam from '../../Components/VideoWebcam/VideoWebcam';

const Webcam = () => {

  return (

    <main className="site-content">
        <h1>Ajustement de la webcam</h1>
            
            <p>Placez-vous devant l'ordinateur de façon à ce que la webcam puisse voir tout votre visage. <br/>
                Vous allez constater que l'Ai peut déjà lire vos expressions.
            </p>
            
            <VideoWebcam />
            
            <p className="text-center">
                <Button link="/SessionInProgress" 
                        text="Suite du parcours" 
                />
            </p>
        </main>    
    );
};

export default Webcam;