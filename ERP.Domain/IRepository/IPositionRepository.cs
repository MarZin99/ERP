namespace ERP.API.IRepository
{
    public interface IPositionRepository
    {
        Task<IEnumerable<Position>> GetAllAsync();
    }
}
