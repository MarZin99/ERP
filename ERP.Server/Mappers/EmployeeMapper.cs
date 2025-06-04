
namespace ERP.Server.Mappers
{
    public static class EmployeeMapper
    {
        public static EmployeeDTO ToDto(Employee employee)
        {
            if (employee == null) return null!;

            return new EmployeeDTO
            {
                Id = employee.Id,
                FirstName = employee.FirstName,
                LastName = employee.LastName,
                Email = employee.Email,
                PositionId = employee.PositionId,
                Position = PositionMapper.ToDto(employee.Position),
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
                PositionName = employee.Position.Title,
            };
        }
    }
}
