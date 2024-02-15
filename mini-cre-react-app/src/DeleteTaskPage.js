import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { HandleCancelButton } from "./api";

const DeleteTaskPage = () => {
    const navigate = useNavigate();
    const { taskId } = useParams();

    const handleDeleteTask = () => {
        fetch(`http://localhost:5084/api/task/${taskId}`, {
            method: 'DELETE',
        })
        .then(response => {
            if (response.ok) {
                navigate('/');
            } else {
                console.error('Error deleting tasl:', response.statusText);
            }
        })
        .catch(error => console.error('Error deleting task:', error));
    };

    return (
        <div className="page-container">
            <h2 className="page-name">Delete Task</h2>
            <p>Are you sure you want to delete this task?</p>
            <div className="action-button-cancel">
                <button className="action-button" onClick={handleDeleteTask}>Delete</button>
                <button className="action-button" onClick={() => HandleCancelButton(navigate)}>Cancel</button>
            </div>
        </div>
    );
};

export default DeleteTaskPage;