import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const OverdueTaskPage = () => {
    const [overdueTasks, setOverdueTasks] = useState([]);

    const fetchOverdueTasks = async () => {
        try {
            const response = await fetch('http://localhost:5084/api/task/overdue');
            const data = await response.json();
            setOverdueTasks(data);
        } catch (error) {
            console.error('Error fetching overdue tasks:', error);
        }
    };

    useEffect(() => {
        fetchOverdueTasks();
    }, []);

    return (
        <div>
            <h2>Overdue Tasks Page</h2>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Employee Name</th>
                        <th>Task Name</th>
                        <th>Start Date</th>
                        <th>End Date</th>
                        <th>Percentage of completion</th>
                        <th>Days overdue</th>
                    </tr>
                </thead>
                <tbody>
                    {overdueTasks.map(task => (
                        <tr key={task.id}>
                            <td>{task.id}</td>
                            <td>{task.employeeName}</td>
                            <td>{task.title}</td>
                            <td>{task.startDate}</td>
                            <td>{task.deadline}</td>
                            <td>{task.completionPercentage}</td>
                            <td>{task.daysOverdue}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="report-buttons">
                <button className="button-link" onClick={() => window.print()}>Print</button>
                <Link to="/" className="button-link">Home</Link>
            </div>
        </div>
    );
};

export default OverdueTaskPage;