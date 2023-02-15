import React from 'react';

import { useState } from 'react';

import db from '../../config';

import { doc, 
         getDoc } from "firebase/firestore"; 

import DataProgressBarSession from '../DataProgressBarSession/DataProgressBarSession';
import Button from '../Button/Button';

import { useEffect } from 'react';

const End = () => {

    const [filmTitle, setFilmTitle] = useState ();

    const [valueEmotion, setValueEmotion] = useState ();

    const [nameEmotion, setNameEmotion] = useState ();

    const icons = {

        neutral: "😶",
        happy: "😄",
        sad: "😞",
        angry: "🤬",
        fearful: "😖",
        disgusted: "🤢",
        surprised: "😲"
    };

    useEffect(() => {

        getDocs();

    }, []);

    const getDocs = async () => {

        try {

            const querySnapshot = await getDoc(doc(db, "FilmFaceDetection", "FilmName"));
            
            setFilmTitle(querySnapshot['_document']['data']['value']['mapValue']['fields']['title']['stringValue']);
            
            setNameEmotion(querySnapshot['_document']['data']['value']['mapValue']['fields']['expression']['stringValue']);
            
            setValueEmotion( querySnapshot['_document']['data']['value']['mapValue']['fields']['probability']['doubleValue']);
        
        } catch (error) {
        
            console.log(error);
        }
    };

    const getIconName = (nameEmotion) => {
        
            return icons[nameEmotion];
    };

    return (

        <main className="site-content">
            <h1>Bilan de la session</h1>
            <p className="session-results-overview text-center">Sur l'ensemble des extraits, voici les émotions que l'AI a détecté :<br/>
                &#128552; : 8'25" / &#128533; : 4'48" / &#128512; : 2'12"
            </p>
            
            <DataProgressBarSession title={filmTitle} 
                                    valueEmotion={valueEmotion} 
                                    icon={getIconName(nameEmotion)} />

            <p className="text-center">
                <Button link="/Data" text="Voir les données consolidées"/>
            </p>
        </main>
    );
};

export default End;