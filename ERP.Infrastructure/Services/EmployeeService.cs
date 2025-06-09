using ERP.API.IRepository;
using ERP.API.Mappers;

public class EmployeeService : IEmployeeService
{
    private readonly IEmployeeRepository _employeeRepository;
    public EmployeeService(IEmployeeRepository employeeRepository)
    {
        _employeeRepository = employeeRepository;
    }

    public async Task<IEnumerable<EmployeeDTO>> GetAllAsync()
    {
        var employees = await _employeeRepository.GetAllAsync();
        return employees.Select(e => EmployeeMapper.ToDto(e));
    }

    public async Task<EmployeeDTO> GetByIdAsync(Guid id)
    {
        var employee = await _employeeRepository.GetByIdAsync(id);
        return EmployeeMapper.ToDto(employee);
    }
    public async Task<IEnumerable<EmployeeToListDto>> GetAllToListAsync()
    {
        var employees = await _employeeRepository.GetAllAsync();
        return employees.Select(e => EmployeeMapper.ToListDto(e));
    }

    public async Task<Employee> CreateAsync(CreateEmployeeDTO employee)
    {
        var newEmployee = EmployeeMapper.ToEntity(employee);

        return await _employeeRepository.AddAsync(newEmployee);
    }
}
