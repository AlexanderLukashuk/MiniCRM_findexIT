import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';
import HomePage from "./HomePage";
import EmployeeTaskPage from "./EmployeeTasksPage";
import OverdueTaskPage from "./OverdueTasksPage";
import AddTaskPage from "./AddTaskPage";
import EditTaskPage from "./EditTaskPage";
import DeleteTaskPage from "./DeleteTaskPage";
import DeleteTaskListItem from "./DeleteTaskListItem"
import AddEmplloyeePage from "./AddEmployeePage";
import DeleteEmployeePage from "./DeleteEmployeePage";
import EditEmployeeListItem from "./EditEmployeeListItem";
import EditEmployeePage from "./EditEmployeePage";
import EmployeeList from "./EmployeeList";
import EditTaskListItem from "./EditTaskListItem";
import DeleteEmployeeListPage from "./DeleteEmployeeListPage";

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/employee/:id/tasks" element={<EmployeeTaskPage />} />
          <Route path="/overdue-tasks" element={<OverdueTaskPage />} />

          <Route path="/add-employee" element={ <AddEmplloyeePage />} />
          <Route path="/delete-employee" element={ <DeleteEmployeeListPage />} />
          <Route path="/delete-employee/:id" element={ <DeleteEmployeePage /> } />
          <Route path="/edit-employee" element={ <EditEmployeeListItem /> } />
          <Route path="/edit-employee/:id" element={ <EditEmployeePage /> } />
          <Route path="employee-tasks" element={ <EmployeeList /> } />
          <Route path="employee-tasks/:id" element={ <EmployeeTaskPage /> } />
          
          <Route path="/add-task/:id" element={<AddTaskPage />} />
          <Route path="/edit-tasks-list/:id" element={<EditTaskListItem />} />
          <Route path="/edit-tasks-list/:id/edit-task/:taskId" element={<EditTaskPage />} />
          <Route path="/delete-task-list/:id" element={<DeleteTaskListItem />} />
          <Route path="/delete-task-list/:id/delete-task/:taskId" element={<DeleteTaskPage />} />

          <Route path="/report" element={<OverdueTaskPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;