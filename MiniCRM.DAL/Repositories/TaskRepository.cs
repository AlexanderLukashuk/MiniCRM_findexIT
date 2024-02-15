using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using MiniCRM.DAL.Entity;
using MiniCRM.DAL.Interfaces;

namespace MiniCRM.DAL.Repositories
{
    public class TaskRepository : IBaseRepository<TaskEntity>
    {
        private readonly AppDbContext _context;

        public TaskRepository(AppDbContext context)
        {
            _context = context;
        }

        public async Task Create(TaskEntity entity)
        {
            await _context.Tasks.AddAsync(entity);
            await _context.SaveChangesAsync();
        }

        public async Task Delete(TaskEntity entity)
        {
            _context.Tasks.Remove(entity);
            await _context.SaveChangesAsync();
        }

        public IQueryable<TaskEntity> GetAll()
        {
            return _context.Tasks.AsQueryable();
        }

        public async Task<TaskEntity> Update(TaskEntity entity)
        {
            _context.Tasks.Update(entity);
            await _context.SaveChangesAsync();

            return entity;
        }

        public async Task<TaskEntity> GetById(int taskId)
        {
            var taskEntity = await _context.Tasks.FirstOrDefaultAsync(t => t.Id == taskId);

            return taskEntity!;
        }

        public IQueryable<TaskEntity> GetTasksByEmployeeId(int employeeId)
        {
            return _context.Tasks.Where(t => t.EmployeeId == employeeId).AsQueryable();
        }

        public async Task<int> GetTaskCountByEmployeeId(int employeeId)
        {
            return await _context.Tasks
                .Where(t => t.EmployeeId == employeeId)
                .CountAsync();
        }

        public async Task<int> GetCompletedTaskCountByEmployeeId(int employeeId)
        {
            return await _context.Tasks
                .Where(t => t.EmployeeId == employeeId && t.CompletionPercentage == 100)
                .CountAsync();
        }
    }
}