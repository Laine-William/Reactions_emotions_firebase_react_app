import React from 'react';

const DataProgressBarSession = (props) => {
  
    return (
    
        <div className="session-results mb">
            <div className="result-item">
                <h2 className="movie">{props.title}</h2>
    
                <ol className="data-resume">
                    <li>
                        <span>&#128552; :</span>
                    
                        <progress id="file" max="100" value="70"> 70% </progress>
                    </li>
                
                    <li>
                        <span>&#128533; :</span>
                        
                        <progress id="file" max="100" value="30"> 30% </progress>
                    </li>
                
                    <li>
                        <span>&#128512; :</span>
                    
                        <progress id="file" max="100" value="10"> 10% </progress>
                    </li>
                </ol>
            </div>
        </div>
    );
};

export default DataProgressBarSession;
