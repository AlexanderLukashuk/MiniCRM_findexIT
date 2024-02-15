import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getEmployees } from './api';

const EmployeeList = () => {
    const [employees, setEmployees] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchEmployees = async () => {
            const data = await getEmployees();
            setEmployees(data);
        };

        fetchEmployees();
    }, []);

    const handleEmployeeTasks = async (employeeId) => {
        navigate(`${employeeId}`);
    }

    return (
        <div className='list-container page-container'>
            <h2 className='page-name'>Employee List</h2>
            <ul>
                {employees.map(employee => (
                    <li key={employee.employee.id}>
                        <div className="info">
                            {employee.employee.fullName} - {employee.employee.position}
                        </div>
                        <button className="list-action-buttons" onClick={() => handleEmployeeTasks(employee.employee.id)}>Tasks</button>
                    </li>
                ))}
            </ul>
            <Link to="/" className="button-link">Home</Link>
        </div>
    );
};

export default EmployeeList;
