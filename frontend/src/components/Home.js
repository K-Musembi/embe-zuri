import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

    const handleGetStarted = () => {
        navigate("/upload");
    }
    
    return (
        <div className="home-container">
            <h1>Welcome to embe zuri App!</h1>
            <p>
                This application enables farmers to detect possible mango diseases, by analyzing leaf images. If a disease is detected, the app will give guidance on the best mitigation measures. You can get started by uploading an image in the 'Image Upload' section.
            </p>
            <button onClick={handleGetStarted}>Get Started</button>
        </div>
    );
};

export default Home;
