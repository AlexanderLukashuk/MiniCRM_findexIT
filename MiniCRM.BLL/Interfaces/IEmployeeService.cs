using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MiniCRM.BLL.Models;

namespace MiniCRM.BLL.Interfaces
{
    public interface IEmployeeService
    {
        Task<IEnumerable<Employee>> GetAllEmployees();

        Task<Employee> GetEmployeeById(int employeeId);

        Task<Employee> AddEmployee(Employee employee);

        Task UpdateEmployee(int id, Employee employee);

        Task<bool> DeleteEmployee(int employeeId);

        Task<IEnumerable<EmployeeWithTaskInfo>> GetAllEmployeeWithTaskInfo();
    }
}