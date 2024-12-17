import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainLayout from "./components/MainLayout";
import Home from './components/Home';
import ImageUpload from './components/ImageUpload';
import Result from './components/Result';
import Information from './components/Information';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Team from './components/Team';
import Logout from './components/Logout';
import NavBar from "./components/NavBar";
import './App.css';

const App = () => {
    const [result, setResult] = useState(null);
    const [info, setInfo] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <Router>
            <NavBar isLoggedIn={isLoggedIn} />
            <div className="app-container">
                <Routes>
                    <Route path="/" element={<MainLayout><Home /></MainLayout>} />
                    <Route path="/upload" element={<MainLayout><ImageUpload onResult={setResult} /></MainLayout>} />
                    <Route path="/result" element={<MainLayout><Result result={result} onInfo={setInfo} /></MainLayout>} />
                    <Route path="/information" element={<MainLayout><Information info={info} /></MainLayout>} />
                    <Route path="/signup" element={<MainLayout><SignUp onSignUp={setIsLoggedIn}/></MainLayout>} />
                    <Route path="/login" element={<MainLayout><Login onLogin={setIsLoggedIn}/></MainLayout>} />
                    <Route path="/team" element={<MainLayout><Team /></MainLayout>} />
                    <Route path="/logout" element={<MainLayout><Logout onLogout={setIsLoggedIn}/></MainLayout>} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
