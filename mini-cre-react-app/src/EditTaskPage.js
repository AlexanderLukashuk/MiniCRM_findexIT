import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { HandleCancelButton } from "./api";

const EditTaskPage = () => {
    const params = useParams();
    const { taskId } = params;
    const { id } = useParams();
    const [title, setTitle] = useState('');
    const [taskDescription, setTaskDescription] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [completionPercentage, setCompletionPercentage] = useState('');
    const navigate = useNavigate();

    const handleEditTask = () => {
        fetch(`http://localhost:5084/api/task/${taskId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ title, taskDescription, startDate, endDate, completionPercentage, employeeId: id }),
        })
            .then(response => response.json())
            .then(data => {
                navigate("/");
            })
            .catch(error => console.error('Error editing task', error));
    };

    return (
        <div className="edit-page-contaioner page-container">
            <h2 className="page-name">Edit Task</h2>
            <label className="info-label">Task Name:</label>
            <input className="info-input" type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
            <label className="info-label">Task Description:</label>
            <input className="info-input" type="text" value={taskDescription} onChange={(e) => setTaskDescription(e.target.value)} />
            <label className="info-label">Start Date:</label>
            <input className="info-input" type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
            <label className="info-label">End Date:</label>
            <input className="info-input" type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
            <label className="info-label">Completion Percentage:</label>
            <input
                className="info-input"
                type="number"
                value={completionPercentage}
                onChange={(e) => setCompletionPercentage(e.target.value)}
            />
            <div className="action-button-cancel">
                <button className="action-button" onClick={handleEditTask}>Edit</button>
                <button className="action-button" onClick={() => HandleCancelButton(navigate)}>Cancel</button>
            </div>
        </div>
    );
};

export default EditTaskPage;