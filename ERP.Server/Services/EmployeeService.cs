using ERP.Server.IRepository;

public class EmployeeService : IEmployeeService
{
    private readonly IEmployeeRepository _employeeRepository;

    public EmployeeService(IEmployeeRepository employeeRepository)
    {
        _employeeRepository = employeeRepository;
    }

    public async Task<IEnumerable<EmployeeDto>> GetAllAsync()
    {
        return await _employeeRepository.GetAllAsync();
    }
    public async Task<IEnumerable<EmployeeToListDto>> GetAllToListAsync()
    {
        return await _employeeRepository.GetAllToListAsync();
    }


    public async Task<Employee> CreateAsync(Employee employee)
    {
        return await _employeeRepository.AddAsync(employee);
    }
}
