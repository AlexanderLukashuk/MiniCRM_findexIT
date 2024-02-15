const baseUrl = 'http://localhost:5084/api';

export const login = async (credentials) => {
    try {
        const response = await fetch(`${baseUrl}/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(credentials),
        });

        if (!response.ok) {
            throw new Error('Login failed');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error during login:', error);
        throw error;
    }
};

export const register = async (userData) => {
    try {
        const response = await fetch(`${baseUrl}/auth/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        });

        if (!response.ok) {
            throw new Error('Registration failed');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error during registration:', error);
        throw error;
    }
};

export const getEmployees = async () => {
    try {
        const response = await fetch(`${baseUrl}/employee`);

        if (!response.ok) {
            throw new Error('Failed to fetch employees');
        }

        const data = await response.json();
        return data;
    } catch(error) {
        console.error('Error during fetching employees:', error);
        throw error;
    }
};

export const getEmployeeTasks = async (id) => {
    try {
        const response = await fetch(`${baseUrl}/task/employee/${id}`);

        if (!response.ok) {
            throw new Error('Failed to fetch employee tasks');
        }

        const data  = await response.json();
        return data;
    } catch (error) {
        console.error('Error during fetching employee tasks:', error);
        throw error;
    }
};

export const getOverdueTasks = async () => {
    try {
        const response = await fetch(`${baseUrl}/tasks/overdue`);

        if (!response.ok) {
            throw new Error('Failed to fetch overdue tasks');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error during fetching overdue tasks:', error);
        throw error;
    }
}

export const deleteEmployee = async (employeeId) => {
    try {
        const response = await fetch(`${baseUrl}/employee/${employeeId}`, {
            method: 'DELETE',
        });

        if (!response.ok) {
            throw new Error('Error deleting employee');
        }
    } catch (error) {
        console.error('Error deleting employee:', error);
        throw error;
    }
};

export const editEmployee = async (employeeId) => {
    try {
        const response = await fetch(`${baseUrl}/employee/${employeeId}`, {
            method: 'PUT',
        });

        if (!response.ok) {
            throw new Error('Error editing employee');
        }
    } catch (error) {
        console.error('Error editing employee:', error);
        throw error;
    }
};

export const HandleCancelButton = (navigate) => {
    navigate('/');
}