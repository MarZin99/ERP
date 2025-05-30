using ERP.Server.Models;

public class EmployeeDto
{
    public Guid Id { get; set; }
    public string FirstName { get; set; }
    public string LastName { get; set; }
    public string Email { get; set; }
    public DateTime HireDate { get; set; }
    public Guid PositionId { get; set; }
    public string Position { get; set; }
}

public class EmployeeToListDto
{
    public Guid Id { get; set; }
    public string FirstName { get; set; }
    public string LastName { get; set; }
    public string Position { get; set; }
}