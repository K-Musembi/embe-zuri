import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

    const handleGetStarted = () => {
        navigate("/upload");
    }
    
    return (
        <div className="home-container">
            <h1>Embe Zuri App</h1>
            <p>
                Enabling early detection of mango fruit tree diseases, and offering solutions to mitigate them
            </p>
            <button onClick={handleGetStarted}>Get Started</button>
        </div>
    );
};

export default Home;
