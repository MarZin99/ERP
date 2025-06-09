
namespace ERP.API.Mappers
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

        public static Employee ToEntity(CreateEmployeeDTO employeeDto)
        {
            if (employeeDto == null) return null!;
            return new Employee
            {
                Id = Guid.NewGuid(),
                FirstName = employeeDto.FirstName,
                LastName = employeeDto.LastName,
                Email = employeeDto.Email,
                HireDate = employeeDto.HireDate,
                PositionId = employeeDto.PositionId,
            };
        }
    }
}
