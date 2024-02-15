import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import './styles.css';
import { HandleCancelButton } from "./api";

const EditEmployeePage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [employees, setEmployees] = useState([]);
    const [employee, setEmployee] = useState({
        fullName: "",
        position: ""
    });

    useEffect(() => {
        fetch(`http://localhost:5084/api/employee/${id}`)
            .then(response => response.json())
            .then(data => setEmployee(data))
            .catch(error => console.error('Error fetching employee:', error));
    }, [id]);

    const handleEditEmployee = () => {
        fetch(`http://localhost:5084/api/employee/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(employee),
        })
            .then(response => {
                if (response.ok) {
                    console.log('Employee edited');
                    navigate('/');
                } else {
                    console.error('Error editing employee:', response.statusText);
                }
            })
            .catch(error => console.error('Error editing employee:', error));
    };

    return (
        <div className="edit-page-contaioner page-container">
            <h2 className="page-name">Edit Employee</h2>
            <label className="info-label">Name:</label>
            <input
                className="info-input"
                type="text"
                placeholder="Employee Name"
                value={employee.fullName}
                onChange={e => setEmployee({ ...employee, fullName: e.target.value })}
            />
            <br />
            <label className="info-label">Position:</label>
            <input
                className="info-input"
                type="text"
                placeholder="Employee Position"
                value={employee.position}
                onChange={e => setEmployee({ ...employee, position: e.targetvalue })}
            />
            <br />
            <div className="action-button-cancel">
                <button className="action-button" onClick={handleEditEmployee}>Edit</button>
                <button className="action-button" onClick={() => HandleCancelButton(navigate)}>Cancel</button>
            </div>
        </div>
    );
};

export default EditEmployeePage;