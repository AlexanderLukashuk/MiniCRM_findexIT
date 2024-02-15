using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MiniCRM.BLL.Models;
using MiniCRM.DAL.Entity;

namespace MiniCRM.BLL.Interfaces
{
    public interface ITaskService
    {
        Task<IEnumerable<TaskBLL>> GetTasksByEmployeeId(int employeeId);

        Task<TaskBLL> GetTaskById(int taskId);

        Task<TaskBLL> AddTask(TaskBLL task);

        Task UpdateTask(int id, TaskBLL task);

        Task<bool> DeleteTask(int taskId);

        Task<IEnumerable<TaskBLL>> GetOverdueTasksWithIncompleteStatus();
    }
}