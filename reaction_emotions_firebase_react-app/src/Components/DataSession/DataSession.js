import React from 'react';

import DataProgressBarSession from '../DataProgressBarSession/DataProgressBarSession';
import Button from '../Button/Button';

const DataSession = () => {

  return (

    <main className="site-content">
        <h1>Données consolidées sur 32 sessions</h1>
            
        <p className="session-results-overview text-center">Sur l'ensemble des extraits, voici les émotions que l'AI a détecté :<br/>
            &#128552; : 8'25" / &#128533; : 4'48" / &#128512; : 2'12"
        </p>
        
        <DataProgressBarSession />
            
        <p className="text-center">
            
            <Button link="/Index" text="rejouer"/>
        </p>
        
    </main>
    );
};

export default DataSession;