namespace ERP.Server.IRepository
{
    public interface IEmployeeRepository
    {
        Task<IEnumerable<EmployeeDto>> GetAllAsync();
        Task<IEnumerable<EmployeeToListDto>> GetAllToListAsync();
        Task<Employee> AddAsync(Employee employee);
    }
}
