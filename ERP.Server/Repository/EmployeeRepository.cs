using ERP.Server.IRepository;
using ERP.Server.Mappers;
using Microsoft.EntityFrameworkCore;

public class EmployeeRepository : IEmployeeRepository
{
    private readonly AppDbContext _context;

    public EmployeeRepository(AppDbContext context)
    {
        _context = context;
    }

    public async Task<IEnumerable<EmployeeDTO>> GetAllAsync()
    {
        return _context.Employees
            .Include(e => e.Position)
            .Select(e => EmployeeMapper.ToDto(e));    
    }
    public async Task<EmployeeDTO> GetByIdAsync(Guid id)
    {
        var employee = await _context.Employees
            .Include(e => e.Position)
            .FirstOrDefaultAsync(e => e.Id == id);

        if (employee == null)
            {
            throw new KeyNotFoundException($"Employee with ID {id} not found.");
            }

        return EmployeeMapper.ToDto(employee);


    }

    public async Task<IEnumerable<EmployeeToListDto>> GetAllToListAsync()
    {
        return _context.Employees
            .Include(e => e.Position)
            .Select(e => EmployeeMapper.ToListDto(e));
    }

    public async Task<Employee> AddAsync(CreateEmployeeDTO employee)
    {
        var employeeExists = await _context.Employees.FirstOrDefaultAsync(e => e.Id == employee.Id);

        if (employeeExists != null)
        {
            throw new ArgumentException($"Employee with ID {employee.Id} already exists.");
        }
 
        var newEmployee = new Employee {
            Id = Guid.NewGuid(),
            FirstName = employee.FirstName,
            LastName = employee.LastName,
            Email = employee.Email,
            PositionId = employee.PositionId,
            Position = await _context.Positions.FindAsync(employee.PositionId),
            HireDate = employee.HireDate
        };
       
        _context.Employees.Add(newEmployee);
        await _context.SaveChangesAsync();
        return newEmployee;
    }
}
