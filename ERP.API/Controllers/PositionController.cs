using Microsoft.AspNetCore.Mvc;
using ERP.API.Services;

namespace ERP.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PositionController : ControllerBase
    {
        private readonly IPositionService _positionService;

        public PositionController(IPositionService positionService)
        {
            _positionService = positionService;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<PositionDTO>>> GetAll()
        {
            var employees = await _positionService.GetAllAsync();
            return Ok(employees);
        }
      
    }
}
