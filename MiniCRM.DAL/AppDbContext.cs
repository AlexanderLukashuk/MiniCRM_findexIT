using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using MiniCRM.DAL.Entity;

namespace MiniCRM.DAL
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
            Database.EnsureCreated();
        }

        public DbSet<EmployeeEntity> Employees { get; set; }
        public DbSet<TaskEntity> Tasks { get; set; }
    }
}