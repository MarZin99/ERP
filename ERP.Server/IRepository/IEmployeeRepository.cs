namespace ERP.Server.IRepository
{
    public interface IEmployeeRepository
    {
        Task<IEnumerable<EmployeeDTO>> GetAllAsync();
        Task<IEnumerable<EmployeeToListDto>> GetAllToListAsync();
        Task<EmployeeDTO> GetByIdAsync(Guid id);
        Task<Employee> AddAsync(CreateEmployeeDTO employee);
    }
}
