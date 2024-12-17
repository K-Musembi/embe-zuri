import React from "react";
import { useNavigate } from "react-router-dom";

const Result = ({ result, onInfo }) => {
    const navigate = useNavigate();

    const handleInformation = () => {
        onInfo(result.prediction);
        navigate("/information");
    }
    
    return (
        <div className="result-panel">
            {result ? (
                <div className="result-container">
                    <div className="prediction-outcome">
                        <h2>Prediction outcome</h2>
                        {result.prediction === "Healthy" ? (
                            <>
                                <h3 className="healthy">Healthy</h3>
                                <h3>Confidence: {result.confidence}%</h3>
                            </>
                        ) : (
                            <>
                                <h3 className="not-healthy">Not healthy: Disease detected</h3>
                                <h3>Probable disease: {result.prediction}</h3>
                                <h3>Confidence: {result.confidence}%</h3>
                            </>
                        )}
                    </div>
                    <div className="recommendations">
                        <h2>Recommendations</h2>
                        {result.remedies.map((remedy, index) => (
                            <div className="remedy" key={index}>{remedy}</div>
                        ))}
                    </div>
                </div>
            ) : (
                <div className="not-mango-leaf">
                    <p>Please upload a mango leaf image</p>
                </div>
            )}
            {result ? (
                <button onClick={handleInformation}>More Information</button>
            ) : (
                <></>
            )} 
        </div>
    );
};

export default Result;
