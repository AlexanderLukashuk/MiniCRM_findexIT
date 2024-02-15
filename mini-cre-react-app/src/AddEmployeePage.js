import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'
import './styles.css';
import { HandleCancelButton } from "./api";

const AddEmplloyeePage = () => {
    const [name, setName] = useState('');
    const [position, setPosition] = useState('');
    const navigate = useNavigate();

    const handleAddEmployee = (employeeData) => {
        fetch('http://localhost:5084/api/employee', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ fullName: name, position: position }),
        })
            .then(response => response.json())
            .then(data => {
                navigate('/');
            })
            .catch(error => console.error('Error adding employee:', error));
    };

    return (
        <div className="add-container page-container">
            <h2 className="page-name">Add Employee</h2>
            <label className="info-label">Name:</label>
            <input className="info-input"
                type="text"
                placeholder="Employee Name"
                value={name}
                onChange={e => setName(e.target.value)}
            />
            <br />
            <label className="info-label">Position:</label>
            <input className="info-input"
                type="text"
                placeholder="Employee Position"
                value={position}
                onChange={e => setPosition(e.target.value)}
            />
            <br />
            <div className="action-button-cancel">
                <button className="action-button" onClick={handleAddEmployee}>Add</button>
                <button className="action-button" onClick={() => HandleCancelButton(navigate)}>Cancel</button>
            </div>
        </div>
    );
};

export default AddEmplloyeePage;