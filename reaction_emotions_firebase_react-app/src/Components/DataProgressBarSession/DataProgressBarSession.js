import React from 'react';

const DataProgressBarSession = (props) => {
  
    return (
    
        <div className="session-results mb">
            <div className="result-item">
                <h2 className="movie">{props.title}</h2>
    
                <ol className="data-resume">
                    <li>
                        <span>{props.icon}</span>
                    
                        <progress id="file" max="100" value={props.valueEmotion * 100}>{props.valueEmotion * 100} % </progress>
                    </li>
                
                    {/* <li>
                        <span>{props.icon}</span>
                        
                        <progress id="file" max="100" value={props.intermediaryvalueEmotion * 100}>{props.intermediaryvalueEmotion * 100} % </progress>
                    </li>
                
                    <li>
                        <span>{props.icon}</span>
                    
                        <progress id="file" max="100" value={props.minimumvalueEmotion * 100}>{props.minimumvalueEmotion * 100} %</progress>
                    </li> */}
                </ol> 
            </div>
        </div>
    );
};

export default DataProgressBarSession;
