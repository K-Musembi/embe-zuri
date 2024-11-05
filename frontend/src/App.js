import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import ImageUpload from './components/ImageUpload';
import Result from './components/Result';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Team from './components/Team';

const App = () => {
    const [prediction, setPrediction] = useState(null);

    return (
        <Router>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/upload">Upload Image</Link>
                {/* <Link to="/result">Result</Link> */}
                <Link to="/signup">Sign Up</Link>
                <Link to="/login">Login</Link>
                <Link to="/team">Team</Link>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/upload" element={<ImageUpload onResult={setPrediction} />} />
                <Route path="/result" element={<Result result={prediction} />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/login" element={<Login />} />
                <Route path="/team" element={<Team />} />
            </Routes>
        </Router>
    );
};

export default App;
