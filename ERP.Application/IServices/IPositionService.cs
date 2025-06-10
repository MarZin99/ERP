using ERP.Common.Results;

public interface IPositionService
{
    Task<Result<IEnumerable<PositionDTO>>> GetAllAsync();
}