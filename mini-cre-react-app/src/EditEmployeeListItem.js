import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getEmployees } from './api';
import { Link } from 'react-router-dom';
import './styles.css';

const EditEmployeeListItem = ({ employee }) => {
    const [employees, setEmployees] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchEmployees = async () => {
            const data = await getEmployees();
            setEmployees(data);
        };

        fetchEmployees();
    }, []);

    const handleEditEmployee = async (employeeId) => {
        navigate(`${employeeId}`)
    };

    return (
        <div className="list-container page-container">
            <h2 className="page-name">Edit Employee</h2>
            <ul>
                {employees.map((employee) => (
                    <li key={employee.employee.id}>
                        <div className="info">
                            {employee.employee.fullName} - {employee.employee.position}
                        </div>
                        <button className="list-action-buttons" onClick={() => handleEditEmployee(employee.employee.id)}>Edit</button>
                    </li>
                ))}
            </ul>
            <Link to="/" className="button-link">Home</Link>
        </div>
    );
};

export default EditEmployeeListItem;