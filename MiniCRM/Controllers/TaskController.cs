using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using MiniCRM.BLL.Interfaces;
using MiniCRM.BLL.Models;

namespace MiniCRM.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TaskController : ControllerBase
    {
        private readonly ITaskService _taskService;

        public TaskController(ITaskService taskService)
        {
            _taskService = taskService;
        }

        [HttpGet("employee/{employeeId}")]
        public async Task<ActionResult<IEnumerable<Task>>> GetTasksBYEmployeeId(int employeeId)
        {
            var tasks = await _taskService.GetTasksByEmployeeId(employeeId);
            return Ok(tasks);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<TaskBLL>> GetTaskById(int id)
        {
            var task = await _taskService.GetTaskById(id);

            if (task == null)
            {
                return NotFound();
            }

            return Ok(task);
        }

        [HttpPost]
        public async Task<ActionResult<TaskBLL>> CreateTask(TaskBLL task)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }

            try
            {
                var createdTask = await _taskService.AddTask(task);
                return CreatedAtAction(nameof(GetTaskById), new { id = createdTask.Id }, createdTask);
            }
            catch (Exception ex)
            {
                Console.WriteLine($"{task.EmployeeId} Error creating task: {ex.Message}");
                return StatusCode(500, $"Internal server Error: {ex.Message}");
            }
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<TaskBLL>> UpdateTask(int id, TaskBLL task)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }

            await _taskService.UpdateTask(id, task);

            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> DeleteTask(int id)
        {
            var result = await _taskService.DeleteTask(id);
            if (!result)
            {
                return NotFound();
            }

            return NoContent();
        }

        [HttpGet("overdue")]
        public async Task<ActionResult<IEnumerable<TaskBLL>>> GetOverdueTasksWithIncompleteStatus()
        {
            var overdueTasks = await _taskService.GetOverdueTasksWithIncompleteStatus();
            return Ok(overdueTasks);
        }
    }
}