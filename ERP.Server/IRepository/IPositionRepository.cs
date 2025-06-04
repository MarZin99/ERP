namespace ERP.Server.IRepository
{
    public interface IPositionRepository
    {
        Task<IEnumerable<Position>> GetAllAsync();
    }
}
