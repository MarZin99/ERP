using ERP.API.IRepository;
using Moq;

namespace ERP.Test
{
    public class EmployeeControllerTest
    {

        private readonly EmployeeService _sut;
        private readonly Mock<IEmployeeRepository> _employeeRepositoryMock = new Mock<IEmployeeRepository>();

        public EmployeeControllerTest()
        {
            _sut = new EmployeeService(_employeeRepositoryMock.Object);
        }


        [Fact]
        public void GetByIdAsync_ShouldReturnEmployee_WhenEmployeeExists()
        {
            // Arrange
            var employeeId = Guid.NewGuid();
            var employee = new Employee { 
                Id = employeeId, 
                FirstName = "John", 
                LastName = "Doe" 
            };

            _employeeRepositoryMock.Setup(repo => repo.GetByIdAsync(employeeId))
                .ReturnsAsync(employee);

            // Act
            var result = _sut.GetByIdAsync(employeeId).Result;

            // Assert
            Assert.NotNull(result);
            Assert.Equal(employeeId, result.Data.Id);
            Assert.Equal("John", result.Data.FirstName);
        }

        [Fact]
        public void GetByIdAsync_ShouldReturnFailure_WhenEmployeeDoesNotExist()
        {
            // Arrange
            var employeeId = Guid.NewGuid();
            _employeeRepositoryMock.Setup(repo => repo.GetByIdAsync(employeeId))
                .ReturnsAsync((Employee)null);
            // Act
            var result = _sut.GetByIdAsync(employeeId).Result;
            // Assert

            Assert.False(result.IsSuccess);
            Assert.Equal($"Employee with ID {employeeId} not found.", result.Error.Message);
        }

        [Fact]
        public void CreateAsync_ShouldReturnSuccess_WhenEmployeeIsCreated()
        {
            // Arrange
            var newEmployee = new CreateEmployeeDTO
            {
                FirstName = "Jane",
                LastName = "Doe",
                PositionId = Guid.NewGuid(),
                HireDate = DateTime.Now
            };
            var employeeEntity = EmployeeMapper.ToEntity(newEmployee);
            _employeeRepositoryMock.Setup(repo => repo.AddAsync(It.IsAny<Employee>()))
                .ReturnsAsync(employeeEntity);

            // Act
            var result = _sut.CreateAsync(newEmployee).Result;

            // Assert
            Assert.True(result.IsSuccess);
            Assert.Equal(newEmployee.FirstName, result.Data.FirstName);
        }

        [Fact]
        public void CreateAsync_ShouldReturnFailure_WhenEmployeeDataIsNull()
        {
            // Arrange
            CreateEmployeeDTO newEmployee = null;
            // Act
            var result = _sut.CreateAsync(newEmployee).Result;
            // Assert
            Assert.False(result.IsSuccess);
            Assert.Equal("Employee data is required.", result.Error.Message);
        }

        [Fact]
        public void UpdateAsync_ShouldReturnSuccess_WhenEmployeeIsUpdated()
        {
            // Arrange
            var employeeId = Guid.NewGuid();
            var existingEmployee = new Employee
            {
                Id = employeeId,
                FirstName = "John",
                LastName = "Doe",
                PositionId = Guid.NewGuid(),
                HireDate = DateTime.Now
            };
            var editedEmployee = new EmployeeDTO
            {
                Id = employeeId,
                FirstName = "Andrzej",
                LastName = "Duda",
            };

            _employeeRepositoryMock.Setup(repo => repo.GetByIdAsync(employeeId))
                .ReturnsAsync(existingEmployee);

            _employeeRepositoryMock.Setup(repo => repo.UpdateAsync(It.IsAny<Employee>()))
                .Returns(Task.CompletedTask);
            // Act
            var result = _sut.UpdateAsync(editedEmployee).Result;
            // Assert
            Assert.True(result.IsSuccess);
            Assert.Equal(existingEmployee.FirstName, result.Data.FirstName);
        }

        [Fact]
        public void UpdateAsync_ShouldReturnFailure_WhenEmployeeDoesNotExist()
        {
            // Arrange
            var employeeId = Guid.NewGuid();
            var editedEmployee = new EmployeeDTO
            {
                Id = employeeId,
                FirstName = "Andrzej",
                LastName = "Duda",
            };
            _employeeRepositoryMock.Setup(repo => repo.GetByIdAsync(employeeId))
                .ReturnsAsync((Employee)null);
            // Act
            var result = _sut.UpdateAsync(editedEmployee).Result;
            // Assert
            Assert.False(result.IsSuccess);
            Assert.Equal("Employee not found.", result.Error.Message);
        }
    }
}