import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const EmployeeTaskPage = ({ match }) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [employeeTasks, setEmployeeTasks] = useState([]);

    const fetchEmployeeTasks = async () => {
        try {
            const response = await fetch(`http://localhost:5084/api/task/employee/${id}`);
            const data = await response.json();
            setEmployeeTasks(data);
        } catch (error) {
            console.log('Error fetching employee tasks:', error);
        }
    };

    useEffect(() => {
        fetchEmployeeTasks();
    }, [id]);

    return (
        <div className="container">
            <h2 className="page-name">Employee Tasks Page</h2>
            <div className="buttons-and-search">
                <Link to={`/add-task/${id}`} className="button-link">Add Task</Link>
                <Link to={`/edit-tasks-list/${id}`} className="button-link">Edit task</Link>
                <Link to={`/delete-task-list/${id}`} className="button-link">Delete task</Link>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Start date</th>
                        <th>Finish date</th>
                        <th>Percentage of completion</th>
                    </tr>
                </thead>
                <tbody>
                    {employeeTasks.map(task => (
                        <tr key={task.id}>
                            <td>{task.id}</td>
                            <td>{task.title}</td>
                            <td>{task.startDate}</td>
                            <td>{task.deadline}</td>
                            <td>{task.completionPercentage}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Link to="/" className="button-link">Home</Link>
        </div>
    );
};

export default EmployeeTaskPage;