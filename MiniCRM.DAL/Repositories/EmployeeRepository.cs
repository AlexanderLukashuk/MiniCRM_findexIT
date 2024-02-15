using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using MiniCRM.DAL.Entity;
using MiniCRM.DAL.Interfaces;

namespace MiniCRM.DAL.Repositories
{
    public class EmployeeRepository : IBaseRepository<EmployeeEntity>
    {
        private readonly AppDbContext _context;

        public EmployeeRepository(AppDbContext context)
        {
            _context = context;
        }

        public async Task Create(EmployeeEntity entity)
        {
            await _context.Employees.AddAsync(entity);
            await _context.SaveChangesAsync();
        }

        public async Task Delete(EmployeeEntity entity)
        {
            _context.Employees.Remove(entity);
            await _context.SaveChangesAsync();
        }

        public IQueryable<EmployeeEntity> GetAll()
        {
            return _context.Employees.AsQueryable();
        }

        public async Task<EmployeeEntity> Update(EmployeeEntity entity)
        {
            _context.Employees.Update(entity);
            await _context.SaveChangesAsync();

            return entity;
        }

        public async Task<EmployeeEntity> GetEmployeeById(int employeeId)
        {
            var employeeFromDb = await _context.Employees.FirstOrDefaultAsync(e => e.Id == employeeId);

            return employeeFromDb!;
        }
    }
}