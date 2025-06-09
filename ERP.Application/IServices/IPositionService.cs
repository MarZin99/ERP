public interface IPositionService
{
    Task<IEnumerable<PositionDTO>> GetAllAsync();
}