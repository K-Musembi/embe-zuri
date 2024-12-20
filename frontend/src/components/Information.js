import React, { useEffect, useState } from "react";

const Information = ({ prediction }) => {
    const [image, setImage] = useState(null);

    useEffect(() => {
        if (prediction?.image) {
            setImage(`data:image/jpeg;base64,${prediction.image}`);
        }
    }, [prediction]);

    return (
        <div className="information-panel">
            <div className="left-panel">
                <div className="description">
                    <h2>{prediction.name}</h2>
                    <p>{prediction.description}</p>
                </div>
                <div className="appearance-causes">
                    {prediction.name === "Healthy" ? (
                        <h3>How a healthy mango tree appears</h3>
                    ) : (
                        <h3>Main Causes</h3>
                    )}
                    <p>{prediction.causes}</p>
                </div>
            </div>
            <div className="right-panel">
                <div className="image">
                    {image ? <img src={image} alt="Loaded" /> : <p>Loading image...</p>}
                </div>
                <div className="tips-remedies">
                    {prediction.name === "Healthy" ? (
                        <h3>Maintaining a healthy farm</h3>
                    ) : (
                        <h3>Prevention Measures</h3>
                    )}
                    {prediction.remedies.map((remedy, index) => (
                        <div className="list" key={index}>{remedy}</div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Information;
