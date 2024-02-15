using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using MiniCRM.BLL.Interfaces;
using MiniCRM.BLL.Models;

namespace MiniCRM.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class EmployeeController : ControllerBase
    {
        private readonly IEmployeeService _employeeService;

        public EmployeeController(IEmployeeService employeeService)
        {
            _employeeService = employeeService;
        }

        // [HttpGet]
        // public async Task<ActionResult<IEnumerable<Employee>>> GetAllEmployees()
        // {
        //     var employees = await _employeeService.GetAllEmployees();
        //     return Ok(employees);
        // }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<EmployeeWithTaskInfo>>> GetAllEmployees()
        {
            var employees = await _employeeService.GetAllEmployeeWithTaskInfo();
            return Ok(employees);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Employee>> GetEmployeeById(int id)
        {
            var employee = await _employeeService.GetEmployeeById(id);
            if (employee == null)
            {
                return NotFound();
            }

            return Ok(employee);
        }

        [HttpPost]
        public async Task<ActionResult<Employee>> CreateEmployee(Employee employee)
        {
            if (string.IsNullOrEmpty(employee.FullName))
            {
                return BadRequest("FullName cannot be empty");
            }

            if (string.IsNullOrEmpty(employee.Position))
            {
                return BadRequest("Position cannot be empty");
            }

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var createdEmployee = await _employeeService.AddEmployee(employee);
            // return CreatedAtAction(nameof(GetEmployeeById), new { id = createdEmployee.Id }, createdEmployee);
            // return Ok(createdEmployee);
            return Ok(new { Message = "Employee created successfully", Employee = createdEmployee });
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> DeleteEmployee(int id)
        {
            var result = await _employeeService.DeleteEmployee(id);
            if (!result)
            {
                return NotFound();
            }

            return NoContent();
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<Employee>> UpdateEmployee(int id, Employee employee)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            await _employeeService.UpdateEmployee(id, employee);
            return NoContent();
        }
    }
}