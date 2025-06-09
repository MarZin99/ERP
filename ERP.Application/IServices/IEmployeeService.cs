public interface IEmployeeService
{
    Task<IEnumerable<EmployeeDTO>> GetAllAsync();
    Task<EmployeeDTO> GetByIdAsync(Guid id);
    Task<IEnumerable<EmployeeToListDto>> GetAllToListAsync();
    Task<Employee> CreateAsync(CreateEmployeeDTO employee);
}