
namespace ERP.Server.Mappers
{
    public static class EmployeeMapper
    {
        public static EmployeeDto ToDto(Employee employee)
        {
            if (employee == null) return null!;

            return new EmployeeDto
            {
                Id = employee.Id,
                FirstName = employee.FirstName,
                LastName = employee.LastName,
                Email = employee.Email,
                Position = employee.Position.Title,
                HireDate = employee.HireDate,
            };
        }

        public static EmployeeToListDto ToListDto(Employee employee)
        {
            if (employee == null) return null!;

            return new EmployeeToListDto
            {
                Id = employee.Id,
                FirstName = employee.FirstName,
                LastName = employee.LastName,
                Position = employee.Position.Title,
            };
        }
    }
}
