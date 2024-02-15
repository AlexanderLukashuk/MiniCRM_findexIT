import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getEmployeeTasks } from "./api";

const EditTaskListItem = () => {
    const { id  } = useParams();
    const [tasks, setTasks] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchTasks = async () => {
            const data = await getEmployeeTasks(id);
            setTasks(data);
        };

        fetchTasks();
    }, []);

    const handleEditTask = async (taskId) => {
        navigate(`edit-task/${taskId}`);
    };

    return (
        <div className="list-container page-container">
            <h2 className="page-name">Edit Task</h2>
            <ul>
                {tasks.map((task) => (
                    <li key={task.id}>
                        <div className="info">
                            {task.title} - {task.description} - {task.startDate} - {task.deadline} - {task.completionPercentage}
                        </div>
                        <button className="list-action-buttons" onClick={() => handleEditTask(task.id)}>Edit</button>
                    </li>
                ))}
            </ul>
            <Link to="/" className="button-link">Home</Link>
        </div>
    );
};

export default EditTaskListItem;