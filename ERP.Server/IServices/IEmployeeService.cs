using ERP.Server.Models;

public interface IEmployeeService
{
    Task<IEnumerable<EmployeeDto>> GetAllAsync();
    Task<IEnumerable<EmployeeToListDto>> GetAllToListAsync();

    Task<Employee> CreateAsync(Employee employee);
}