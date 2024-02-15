import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getEmployeeTasks } from "./api";

const DeleteTaskListItem = () => {
    const { id } = useParams();
    const [tasks, setTasks] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchTasks = async () => {
            const data = await getEmployeeTasks(id);
            setTasks(data);
        };

        fetchTasks();
    }, []);

    const handleDeleteTask = async (taskId) => {
        navigate(`delete-task/${taskId}`);
    }

    return (
        <div className="list-container page-container">
            <h2 className="page-name">Delete Task</h2>
            <ul>
                {tasks.map((task) => (
                    <li key={task.id}>
                        <div className="info">
                            {task.title} - {task.description} - {task.startDate} - {task.deadline} - {task.completionPercentage}
                        </div>
                        <button className="list-action-buttons" onClick={() => handleDeleteTask(task.id)}>Delete</button>
                    </li>
                ))}
            </ul>
            <Link to="/" className="button-link">Home</Link>
        </div>
    );
};

export default DeleteTaskListItem;