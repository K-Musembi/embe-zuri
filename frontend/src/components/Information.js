import React from "react";
import { useEffect, useState } from "react";
import { API_URL } from "../config";

const Information = ({ prediction }) => {

    const [image, setImage] = useState(null);
    const [info, setInfo] = useState(null);

    // useEffect is used when a spcific action must take place once a page is rendered
    // useEffect dependencies should be included, if any e.g. prediction
    // to access data from the useEffect hook, use a useState hook e.g. info
    useEffect(() => {
        const fetchInfo = async () => {
            const response = await fetch(`${API_URL}/information`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ prediction })
            });
            if (response.ok) {
                const data = await response.json();
                setImage(`data:image/jpeg;base64,${data.image}`);
                setInfo(data);
            } else {
                console.error("information not available");
            }
        };
        fetchInfo();
    });

    return (
        <div className="information-panel">
            <div className="left-panel">
                <div className="description">
                    <h2>{info.name}</h2>
                    <p>{info.description}</p>
                </div>
                <div className="appearance-causes">
                    {info.name === "Healthy" ? (
                        <h3>How a healthy mango tree appears</h3>
                    ) : (
                        <h3>Main Causes</h3>
                    )}
                    <p>{info.causes}</p>
                </div>
            </div>
            <div className="right-panel">
                <div className="image">
                    {image ? <img src={image} alt="Loaded" /> : <p>Loading image...</p>}
                </div>
                <div className="tips-remedies">
                    {info.name === "Healthy" ? (
                        <h3>Maintaining a healthy farm</h3>
                    ) : (
                        <h3>Prevention Measures</h3>
                    )}
                    {info.remedies.map((remedy, index) => (
                        <div className="list" key={index}>{remedy}</div>
                    ))}
                </div>
            </div>
            <h1>{prediction}</h1>
        </div>
    );
};

export default Information;
