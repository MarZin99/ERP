using ERP.API.IRepository;
using ERP.API.Mappers;

public class PositionService : IPositionService
{
    private readonly IPositionRepository _positionRepository;
    public PositionService(IPositionRepository positionRepository)
    {
        _positionRepository = positionRepository;
    }

    public async Task<IEnumerable<PositionDTO>> GetAllAsync()
    {
        var positions = await _positionRepository.GetAllAsync();
        return positions.Select(p => PositionMapper.ToDto(p));
    }
}

