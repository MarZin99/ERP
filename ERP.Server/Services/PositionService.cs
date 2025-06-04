using ERP.Server.IRepository;

public class PositionService : IPositionService
{
    private readonly IPositionRepository _positionRepository;
    public PositionService(IPositionRepository positionRepository)
    {
        _positionRepository = positionRepository;
    }

    public async Task<IEnumerable<PositionDTO>> GetAllAsync()
    {
        return await _positionRepository.GetAllAsync();
    }
}

