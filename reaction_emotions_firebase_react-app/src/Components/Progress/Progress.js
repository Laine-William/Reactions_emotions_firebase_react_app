import React from 'react';

import VideoProgress from '../VideoProgress/VideoProgress';

import Button from '../Button/Button';

const Progress = () => {
    
    return (

        <main className="site-content">
            <div className="intro">
                <h1>Extrait : Alien, le huitième passager</h1>

                <VideoProgress />
                
                <p className="text-center">
                    <Button link="/SessionEnd" text="Suite du parcours"/>
                </p>
            </div>
        </main>
    );
};

export default Progress;
