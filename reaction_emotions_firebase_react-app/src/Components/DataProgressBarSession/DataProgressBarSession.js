import React from 'react';

const DataProgressBarSession = (props) => {
  
    return (
    
        <div className="session-results mb">
            <div className="result-item">
                <h2 className="movie">{props.title}</h2>
    
                <ol className="data-resume">
                    <li>
                        <span>{props.icon}</span>
                    
                        <progress id="file" max="100" value={props.maximumValueEmotion * 100}>{props.maximumValueEmotion * 100} % </progress>
                    </li>
                
                    <li>
                        <span>{props.icon}</span>
                        
                        <progress id="file" max="100" value={props.intermediaryValueEmotion * 100}>{props.intermediaryValueEmotion * 100} % </progress>
                    </li>
                
                    <li>
                        <span>{props.icon}</span>
                    
                        <progress id="file" max="100" value={props.minimumValueEmotion * 100}>{props.minimumValueEmotion * 100} %</progress>
                    </li>
                </ol>
            </div>
        </div>
    );
};

export default DataProgressBarSession;
