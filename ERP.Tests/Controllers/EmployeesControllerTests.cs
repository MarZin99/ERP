using ERP.API.Controllers;
using Microsoft.AspNetCore.Mvc;
using Moq;
using Xunit;

public class EmployeesControllerTests
{
    private readonly Mock<IEmployeeService> _employeeServiceMock;

    public EmployeesControllerTests()
    {
        _employeeServiceMock = new Mock<IEmployeeService>();
    }

    [Fact]
    public async Task GetEmployeeByIdAsync_ReturnsEmployee_WhenIdIsValid()
    {
        // Arrange
        var expectedEmployee = new Employee { 
            Id = new Guid(),
            FirstName = "Jan",
            LastName = "Pereczepko",
            Email = "test@test.pl",
            Position = new Position { 
                Id = new Guid(),
                Title = "Programista",
                BaseSalary = 1000
            }
        };
     

        // Act
        //var result = await _controller.GetEmployeeByIdAsync(employeeId);

        //// Assert
        //var actionResult = Assert.IsType<ActionResult<Employee>>(result);
        //var okResult = Assert.IsType<OkObjectResult>(actionResult.Result);
        //var actualEmployee = Assert.IsType<Employee>(okResult.Value);
        //Assert.Equal(expectedEmployee.FirstName, actualEmployee.LastName);
    }
}
