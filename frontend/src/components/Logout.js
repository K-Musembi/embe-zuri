import React from 'react';
import { useNavigate } from 'react-router-dom';
import { API_URL } from '../config';

const Logout = ({ onLogout }) => {
    const navigate = useNavigate()

    const handleLogout = async () => {
        const response = await fetch(`${API_URL}/logout`, {
            method: 'POST',
            credentials: 'include'
        });
        
        if (response.ok) {
            onLogout(false);
            navigate("/");
        } else {
            alert("Logout failed!");
        }
    };

    return (
        <div className='logout-container'>
            <p>Logout from the app</p>
            <button className='logout-button' onClick={handleLogout}>
                Logout
            </button>
        </div>
    );
};

export default Logout;
