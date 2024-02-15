import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const [username, setUserName] = useState('');
    const [password, setPassowrd] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
        fetch('http://localhost:5084/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Authentication failed');
                }

                navigate('/home');
            })
            .catch(error => console.error('Error authenticating:', error));
    };

    return (
        <div>
            <h2>Login</h2>
            <div>
                <label>Username:</label>
                <input 
                    type="text"
                    value={username}
                    onChange={e => setUserName(e.target.value)}
                />
            </div>
            <div>
                <label>Password</label>
                <input
                    type="passsword"
                    value={password}
                    onChange={e => setPassowrd(e.target.value)}
                />
            </div>
            <button onClick={handleLogin}>Login</button>
        </div>
    );
};

export default LoginPage;