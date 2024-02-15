using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MiniCRM.BLL.Interfaces;
using MiniCRM.BLL.Models;
using MiniCRM.BLL.Services;
using MiniCRM.DAL.Entity;
using MiniCRM.DAL.Interfaces;
using MiniCRM.DAL.Repositories;

namespace MiniCRM
{
    public static class Initializer
    {
        public static void InitializeRepositories(this IServiceCollection services)
        {
            services.AddScoped<IBaseRepository<EmployeeEntity>, EmployeeRepository>();
            services.AddScoped<IBaseRepository<TaskEntity>, TaskRepository>();

            services.AddScoped<EmployeeRepository>();
            services.AddScoped<TaskRepository>();
        }

        public static void InitializeServices(this IServiceCollection services)
        {
            services.AddScoped<IEmployeeService, EmployeeService>();
            services.AddScoped<ITaskService, TaskService>();
        }
    }
}