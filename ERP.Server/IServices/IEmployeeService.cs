using ERP.Server.Models;

public interface IEmployeeService
{
    Task<IEnumerable<EmployeeDto>> GetAllAsync();
    Task<EmployeeDto> GetByIdAsync(Guid id);
    Task<IEnumerable<EmployeeToListDto>> GetAllToListAsync();

    Task<Employee> CreateAsync(Employee employee);
}