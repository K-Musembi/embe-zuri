import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

    const handleGetStarted = () => {
        navigate("/upload");
    }
    
    return (
        <div className="home-container">
            <h1>embe zuri</h1>
            <p>
                Welcome to embe zuri. This app enables early detection of mango fruit tree diseases, and offers solutions to mitigate them.
            </p>
            <button onClick={handleGetStarted}>Get Started</button>
        </div>
    );
};

export default Home;
