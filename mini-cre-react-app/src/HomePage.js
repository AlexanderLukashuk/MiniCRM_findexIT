import React, { useState, useEffect } from "react";
import handleAddEmployee from "./AddEmployeePage";
import handleDeleteEmployee from "./DeleteEmployeeListPage";
import AddEmplloyeePage from "./AddEmployeePage";
import { Link } from 'react-router-dom'
import EditEmployeeListItem from "./EditEmployeeListItem";
import './styles.css';

const HomePage = () => {
    const [employees, setEmployees] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const fetchEmployees = async () => {
        try {
            const response = await fetch('http://localhost:5084/api/employee');
            const data = await response.json();
            setEmployees(data);
        } catch (error) {
            console.error('Error fetching employees;', error);
        }
    };

    const handleSearch = () => {
        const filteredEmployees = employees.filter(employee =>
            employee.fullName.toLowerCase().includes(searchTerm.toLowerCase())
        );

        setEmployees(filteredEmployees);
    };

    useEffect(() => {
        fetchEmployees();
    }, []);

    return (
        <div className="container">
            <h2>Home Page</h2>
            <div className="buttons-and-search">
                <Link to="/add-employee" className="button-link">Add Employee</Link>
                <Link to="/edit-employee" className="button-link">Edit Employee</Link>
                <Link to="/delete-employee" className="button-link">Delete Employee</Link>
                <Link to="employee-tasks" className="button-link">Tasks</Link>
                <Link to="/report" className="button-link">Report</Link>

                <div>
                    <input
                        type="text"
                        placeholder="Search by name"
                        value={searchTerm}
                        onChange={e => setSearchTerm(e.target.value)}
                    />
                    <button onClick={handleSearch}>Search</button>
                </div>
            </div>
            
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Position</th>
                        <th>Tasks</th>
                        <th>Completed Tasks(%)</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map(employee => (
                        <tr key={employee.employee.id}>
                            <td>{employee.employee.id}</td>
                            <td>{employee.employee.fullName}</td>
                            <td>{employee.employee.position}</td>
                            <td>{employee.taskCount}</td>
                            <td>{employee.completionPercentage}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default HomePage;