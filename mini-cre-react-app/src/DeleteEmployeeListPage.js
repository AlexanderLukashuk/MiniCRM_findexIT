import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getEmployees } from './api';
import './styles.css';

const DeleteEmployeeListPage = () => {
    const [employees, setEmployees] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchEmployees = async () => {
            const data = await getEmployees();
            setEmployees(data);
        };

        fetchEmployees();
    }, []);

    const handleDeleteEmployee = async (employeeId) => {
        navigate(`${employeeId}`);
    };

    return (
        <div className="list-container page-container">
            <h2 className="page-name">Delete Employee</h2>
            <ul>
                {employees.map((employee) => (
                    <li key={employee.employee.id}>
                        <div className="info">
                            {employee.employee.fullName} - {employee.employee.position}
                        </div>
                        <button className="list-action-buttons" onClick={() => handleDeleteEmployee(employee.employee.id)}>Delete</button>
                    </li>
                ))}
            </ul>
            <Link to="/" className="button-link">Home</Link>
        </div>
    );
};

export default DeleteEmployeeListPage;