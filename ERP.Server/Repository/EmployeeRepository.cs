using ERP.Server;
using ERP.Server.IRepository;
using ERP.Server.Mappers;
using ERP.Server.Models;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Threading.Tasks;

public class EmployeeRepository : IEmployeeRepository
{
    private readonly AppDbContext _context;

    public EmployeeRepository(AppDbContext context)
    {
        _context = context;
    }

    public async Task<IEnumerable<EmployeeDto>> GetAllAsync()
    {
        return _context.Employees
            .Include(e => e.Position)
            .Select(e => EmployeeMapper.ToDto(e));    
    }


    public async Task<IEnumerable<EmployeeToListDto>> GetAllToListAsync()
    {
        return _context.Employees
            .Include(e => e.Position)
            .Select(e => EmployeeMapper.ToListDto(e));
    }

    public async Task<Employee> AddAsync(Employee employee)
    {
        _context.Employees.Add(employee);
        await _context.SaveChangesAsync();
        return employee;
    }
}
