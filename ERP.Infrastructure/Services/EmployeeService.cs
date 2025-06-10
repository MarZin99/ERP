using ERP.API.IRepository;
using ERP.API.Mappers;
using ERP.Common.Results;

public class EmployeeService : IEmployeeService
{
    private readonly IEmployeeRepository _employeeRepository;
    public EmployeeService(IEmployeeRepository employeeRepository)
    {
        _employeeRepository = employeeRepository;
    }

    public async Task<Result<IEnumerable<EmployeeDTO>>> GetAllAsync()
    {
        var emp = await _employeeRepository.GetAllAsync();
        var empDTO = emp.Select(e => EmployeeMapper.ToDto(e));

        return Result.Success(empDTO);
    }

    public async Task<Result<EmployeeDTO>> GetByIdAsync(Guid id)
    {
        var emp = await _employeeRepository.GetByIdAsync(id);
        if (emp == null)
            return Result.Failure<EmployeeDTO>("Employee not found.");
        var empDTO = EmployeeMapper.ToDto(emp);

        return Result.Success(empDTO);
    }
    public async Task<Result<IEnumerable<EmployeeToListDto>>> GetAllToListAsync()
    {
        var emp = await _employeeRepository.GetAllAsync();
        var empDto = emp.Select(e => EmployeeMapper.ToListDto(e));

        return Result.Success(empDto);
    }

    public async Task<Result<Employee>> CreateAsync(CreateEmployeeDTO employee)
    {
        if (employee == null) return Result.Failure<Employee>("Employee data is required.");

        var newEmployee = EmployeeMapper.ToEntity(employee);
        await _employeeRepository.AddAsync(newEmployee);

        return Result.Success(newEmployee);
    }

    public async Task<Result<Employee>> UpdateAsync(EmployeeDTO employee)
    {
        var existingEmp = await _employeeRepository.GetByIdAsync(employee.Id);
        if (existingEmp == null)
            return Result.Failure<Employee>("Employee not found.");

        existingEmp.FirstName = employee.FirstName;
        existingEmp.LastName = employee.LastName;
        existingEmp.PositionId = employee.PositionId;
        existingEmp.HireDate = employee.HireDate;

        await _employeeRepository.UpdateAsync(existingEmp);
        return Result.Success(existingEmp);
    }
}
