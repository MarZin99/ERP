using Microsoft.AspNetCore.Mvc;
using ERP.Server.Models;
using ERP.Server.Services;

namespace ERP.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeController : ControllerBase
    {
        private readonly IEmployeeService _employeeService;

        public EmployeeController(IEmployeeService employeeService)
        {
            _employeeService = employeeService;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<EmployeeDto>>> Get()
        {
            var employees = await _employeeService.GetAllAsync();
            return Ok(employees);
        }
        [HttpGet("list")]
        public async Task<ActionResult<IEnumerable<EmployeeToListDto>>> GetToList()
        {
            var employees = await _employeeService.GetAllToListAsync();
            return Ok(employees);
        }

        [HttpPost]
        public async Task<IActionResult> Post(Employee employee)
        {
            var created = await _employeeService.CreateAsync(employee);
            return CreatedAtAction(nameof(Get), new { id = created.Id }, created);
        }
    }
}
