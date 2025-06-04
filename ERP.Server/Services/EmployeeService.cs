using ERP.Server.IRepository;

public class EmployeeService : IEmployeeService
{
    private readonly IEmployeeRepository _employeeRepository;
    public EmployeeService(IEmployeeRepository employeeRepository)
    {
        _employeeRepository = employeeRepository;
    }

    public async Task<IEnumerable<EmployeeDTO>> GetAllAsync()
    {
        return await _employeeRepository.GetAllAsync();
    }

    public async Task<EmployeeDTO> GetByIdAsync(Guid id)
    {
        return await _employeeRepository.GetByIdAsync(id);
    }
    public async Task<IEnumerable<EmployeeToListDto>> GetAllToListAsync()
    {
        return await _employeeRepository.GetAllToListAsync();
    }

    public async Task<Employee> CreateAsync(CreateEmployeeDTO employee)
    {
        return await _employeeRepository.AddAsync(employee);
    }
}
