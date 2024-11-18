import React from "react";

const Result = ({ result }) => {
    
    return (
        <div className="result-panel">
            {result ? (
                <div>
                    <h2>Prediction outcome</h2>
                    <p>Disease: {result.prediction}</p>
                    <p>Confidence: {result.confidence}%</p>
                </div>
            ) : (
                <div className="no-result">
                    <p>Please upload an image</p>
                </div>
            )}
        </div>
    );
};

export default Result;
