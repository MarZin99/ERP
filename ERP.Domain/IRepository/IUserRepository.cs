namespace ERP.API.IRepository
{
    public interface IUserRepository
    {
        Task<IEnumerable<User>> GetAllAsync();
        Task<User> GetByEmailAsync(string email);
    }
}
