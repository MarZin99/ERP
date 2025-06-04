using Microsoft.AspNetCore.Mvc;
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
        public async Task<ActionResult<IEnumerable<EmployeeDTO>>> Get()
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
        [HttpGet("{id}")]
        public async Task<ActionResult<EmployeeDTO>> GetByIdList([FromRoute] Guid id)
        {
            var employees = await _employeeService.GetByIdAsync(id);
            return Ok(employees);
        }


        [HttpPost]
        public async Task<IActionResult> Post([FromBody] CreateEmployeeDTO employee)
        {
            var created = await _employeeService.CreateAsync(employee);
            return CreatedAtAction(nameof(Get), new { id = created.Id }, created);
        }
    }
}
