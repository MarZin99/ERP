using ERP.Common.Results;

public interface IEmployeeService
{
    Task<Result<IEnumerable<EmployeeDTO>>> GetAllAsync();
    Task<Result<EmployeeDTO>> GetByIdAsync(Guid id);
    Task<Result<IEnumerable<EmployeeToListDto>>> GetAllToListAsync();
    Task<Result<Employee>> CreateAsync(CreateEmployeeDTO employee);
    Task<Result<Employee>> UpdateAsync(EmployeeDTO employee);
}