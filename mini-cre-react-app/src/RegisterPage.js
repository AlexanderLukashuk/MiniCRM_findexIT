import React, { useState } from "react";

const RegisterPage = () => {
    const [username, setUserName] = useState('');
    const [password, setPassowrd] = useState('');

    const handleRegister = () => {
        fetch('http://localhost:5084/api/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username,
                password,
            }),
        })
            .then(response => {
                if (response.ok) {
                    console.log('Registration successfull');
                } else {
                    console.error('Registration failed');
                }
            })
            .catch(error => console.error('Error during registration:', error));
    };

    return (
        <div>
            <h2>Register</h2>
            <label>
                Username:
                <input
                    type="text"
                    value={username}
                    onChange={e => setUserName(e.target.value)}
                />
            </label>
            <br />
            <label>
                Password:
                <input
                    type="password"
                    value={password}
                    onChange={e => setPassowrd(e.target.value)}
                />
            </label>
            <br />
            <button onClick={handleRegister}>Register</button>
        </div>
    );
};

export default RegisterPage;