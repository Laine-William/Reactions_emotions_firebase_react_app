import '../../Assets/Styles/Styles.css';

import Index from '../Index/Index';

import Data from '../Data/Data';

import AjustWebcam from '../AjustWebcam/AjustWebcam';

import SessionInProgress from '../SessionInProgress/SessionInProgress';

import SessionEnd from '../SessionEnd/SessionEnd';

import { BrowserRouter, 
         Routes, 
         Route } from 'react-router-dom';

const Application = () => {

    return (
    
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path = "/Index" element = {<Index />} />

                    <Route path = "/Data" element = {<Data />} />

                    <Route path = "/AjustWebcam" element = {<AjustWebcam />} />

                    <Route path = "/SessionInProgress" element = {<SessionInProgress />} />

                    <Route path = "/SessionEnd" element = {<SessionEnd />} />

                    <Route path = "*" element = {<Index />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default Application;