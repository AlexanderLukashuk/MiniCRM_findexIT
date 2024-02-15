import React, { useState } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import { HandleCancelButton } from "./api";

const AddTaskPage = () => {
    const { id } = useParams();
    const [taskName, setTaskName] = useState('');
    const [description, setTaskDescription] = useState('');
    const [startDate, setStartDate] = useState('');
    const [deadline, setEndDate] = useState('');
    const [completionPercentage, setCompletionPercentage] = useState('');
    const navigate = useNavigate();

    const handleAddTask = () => {
        fetch('http://localhost:5084/api/task', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ title: taskName, description, startDate, deadline, completionPercentage, employeeId: id, }),
        })
            .then(response => response.json())
            .then(() => {
                navigate("/");
            })
            .catch(error => console.error('Error adding task:', error));
    };

    return (
        <div className="add-container page-container">
            <h2 className="page-name">Add Task</h2>
            <label className="info-label">Task Name:</label>
            <input className="info-input" type="text" value={taskName} onChange={(e) => setTaskName(e.target.value)} />
            <label className="info-label">Description:</label>
            <input className="info-input" type="text" value={description} onChange={(e) => setTaskDescription(e.target.value)} />
            <label className="info-label">Start Date:</label>
            <input className="info-input" type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
            <label className="info-label">End Date:</label>
            <input className="info-input" type="date" value={deadline} onChange={(e) => setEndDate(e.target.value)} />
            <label className="info-label">Completion Percentage:</label>
            <input
                className="info-input"
                type="number"
                value={completionPercentage}
                onChange={(e) => setCompletionPercentage(e.target.value)}
            />
            <div className="action-button-cancel">
                <button className="action-button" onClick={handleAddTask}>Add</button>
                <button className="action-button" onClick={() => HandleCancelButton(navigate)}>Cancel</button>
            </div>
        </div>
    );
};

export default AddTaskPage;