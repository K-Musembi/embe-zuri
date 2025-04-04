import React, { useEffect, useState } from "react";
import { API_URL } from "../config";

const Help = () => {

    const [userGuide, setUserGuide] = useState(null);

    useEffect(() => {

        const getHelp = async () => {
            try {
                const response = await fetch(`${API_URL}/help`, {
                    method: 'GET',
                });
                if (response.ok) {
                    const result = await response.json();
                    setUserGuide(result);
                }
            } catch (err) {
                console.error("user guide not avaialble", err);
            }
        };
        getHelp();
    }, []);

    return (
        <div className="help-container">
            <div className="help-title">
                <h1>Quick Start Guide</h1>
            </div>
            <div className="help-content">
                <div className="help-panel">
                    <h2>General Description</h2>
                    <p>{userGuide?.description}</p>
                </div>
                <div className="help-panel">
                    <h2>Navigating the application</h2>
                    {userGuide?.navigation.map((item, index) => (
                        <p key={{index}}>{item}</p>
                    ))}
                </div>
                <div className="help-panel">
                    <h2>Sign Up and Login</h2>
                    {userGuide?.access.map((item, index) => (
                        <p key={{index}}>{item}</p>
                    ))}
                </div>
                <div className="help-panel">
                    <h2>Uploading images</h2>
                    {userGuide?.uploading.map((item, index) => (
                        <p key={{index}}>{item}</p>
                    ))}
                </div>
                <div className="help-panel">
                    <h2>Interpreting prediction results</h2>
                    {userGuide?.results.map((item, index) => (
                        <p key={{index}}>{item}</p>
                    ))}
                </div>
            </div>
            <div className="help-footer">
                    <h2>For further assistance</h2>
                    <h3>{userGuide?.assistance}</h3>
            </div>
        </div>
    );
};

export default Help;
