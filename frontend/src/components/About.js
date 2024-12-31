import React from "react";

const Team = () => {

    return (
        <div className="about-container">
            <div className="about">
                <img src="/mango farm.jpeg" alt="Embe Zuri" />
            </div>
            <div className="about-app-description">
                <h1>About app</h1>
                <p>
                    This application simplifies the process of diagnosing mango fruit tree diseases. The app uses an AI deep learning model to categorise leaf images based on signatures that differentiate between healthy mango leaves and those that are likely infected with a disease. The application can identify six common diseases tha affect mango trees and offer remedies and prevention measures to help farmers mitigate the diseases.
                </p>
            </div>
        </div>
    );
};

export default Team;
