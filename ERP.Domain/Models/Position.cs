public class Position
{
    public Guid Id { get; set; }
    public string Title { get; set; }
    public decimal BaseSalary { get; set; }

    public ICollection<Employee> Employees { get; set; }
}

