using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using MiniCRM.BLL.Interfaces;
using MiniCRM.BLL.Models;
using MiniCRM.DAL.Entity;
using MiniCRM.DAL.Repositories;

namespace MiniCRM.BLL.Services
{
    public class TaskService : ITaskService
    {
        private readonly TaskRepository _taskRepository;

        public TaskService(TaskRepository taskRepository)
        {
            _taskRepository = taskRepository;
        }

        public async Task<TaskBLL> AddTask(TaskBLL task)
        {
            var taskEntity = MapToDataEntity(task);
            await _taskRepository.Create(taskEntity);

            return MapToBusinessModel(taskEntity);
        }

        public async Task<bool> DeleteTask(int taskId)
        {
            var taskEntity = await _taskRepository.GetById(taskId);
            if (taskEntity == null)
            {
                return false;
            }

            await _taskRepository.Delete(taskEntity);
            return true;
        }

        public async Task<TaskBLL> GetTaskById(int taskId)
        {
            var taskFromDb = await _taskRepository.GetById(taskId);

            return MapToBusinessModel(taskFromDb);
        }

        public async Task<IEnumerable<TaskBLL>> GetTasksByEmployeeId(int employeeId)
        {
            var tasksFromDb = await _taskRepository.GetTasksByEmployeeId(employeeId).ToListAsync();

            return MapToBusinessModels(tasksFromDb);
        }

        public async Task UpdateTask(int id, TaskBLL task)
        {
            var existingTask = await _taskRepository.GetById(id);
            if (existingTask == null)
            {
                return;
            }
            var taskEntity = MapToDataEntity(task);
            await _taskRepository.Update(taskEntity);
        }

        public async Task<IEnumerable<TaskBLL>> GetOverdueTasksWithIncompleteStatus()
        {
            var overdueTasks = await _taskRepository
                .GetAll()
                .Where(t => t.Deadline < DateTime.Now && t.CompletionPercentage < 100)
                .ToListAsync();

            return MapToBusinessModels(overdueTasks);
        }

        private IEnumerable<TaskBLL> MapToBusinessModels(IEnumerable<TaskEntity> taskFromDb)
        {
            return taskFromDb.Select(t => MapToBusinessModel(t));
        }

        private TaskBLL MapToBusinessModel(TaskEntity taskFromDb)
        {
            return new TaskBLL
            {
                Id = taskFromDb.Id,
                EmployeeId = taskFromDb.EmployeeId,
                Title = taskFromDb.Title,
                Description = taskFromDb.Description,
                StartDate = taskFromDb.StartDate,
                Deadline = taskFromDb.Deadline,
                CompletionPercentage = taskFromDb.CompletionPercentage
            };
        }

        private TaskEntity MapToDataEntity(TaskBLL task)
        {
            return new TaskEntity
            {
                Id = task.Id,
                EmployeeId = task.EmployeeId,
                Title = task.Title,
                Description = task.Description,
                StartDate = task.StartDate,
                Deadline = task.Deadline,
                CompletionPercentage = task.CompletionPercentage
            };
        }
    }
}