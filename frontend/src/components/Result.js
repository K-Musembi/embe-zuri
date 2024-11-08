import React from "react";

const Result = ({ result }) => {
    
    return (
        <div className="result-container">
            {result ? (
                <div>
                    <h2>Prediction outcome</h2>
                    <p>Disease: {result.prediction}</p>
                    <p>Confidence: {result.confidence}%</p>
                </div>
            ) : (
                <p>Please upload an image</p>
            )}
        </div>
    );
};

export default Result;
