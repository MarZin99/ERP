public class EmployeeDTO
{
    public Guid Id { get; set; }
    public string FirstName { get; set; }
    public string LastName { get; set; }
    public string Email { get; set; }
    public DateTime HireDate { get; set; }
    public Guid PositionId { get; set; }
    public PositionDTO Position { get; set; }
}

public class CreateEmployeeDTO
{
    public string FirstName { get; set; }
    public string LastName { get; set; }
    public string Email { get; set; }
    public DateTime HireDate { get; set; }
    public Guid PositionId { get; set; }
}

public class EmployeeToListDto
{
    public Guid Id { get; set; }
    public string FirstName { get; set; }
    public string LastName { get; set; }
    public string PositionName { get; set; }
}