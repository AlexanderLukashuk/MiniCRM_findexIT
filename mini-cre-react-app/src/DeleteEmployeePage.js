import React from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import './styles.css';
import { HandleCancelButton } from "./api";

const DeleteEmployeePage = () => {
    const navigate = useNavigate();
    const { id } = useParams();

    const handleDeleteEmployee = () => {
        fetch(`http://localhost:5084/api/employee/${id}`, {
            method: 'DELETE',
        })
        .then(response => {
            if (response.ok) {
                navigate('/');
            } else {
                console.error('Error deleting employee: ', response.statusText);
            }
        })
        .catch(error => console.error('Error deleting employee: ', error));
    };

    return (
        <div className="page-container">
            <h2 className="page-name">Delete Employee</h2>
            <p>Are you sure you want to delete this employee?</p>
            <div className="action-button-cancel">
                <button className="action-button" onClick={handleDeleteEmployee}>Delete</button>
                <button className="action-button" onClick={() => HandleCancelButton(navigate)}>Cancel</button>
            </div>
        </div>
    );
};

export default DeleteEmployeePage;