using ERP.API.IRepository;
using ERP.Common.Results;

public class PositionService : IPositionService
{
    private readonly IPositionRepository _positionRepository;
    public PositionService(IPositionRepository positionRepository)
    {
        _positionRepository = positionRepository;
    }

    public async Task<Result<IEnumerable<PositionDTO>>> GetAllAsync()
    {
        var pos = await _positionRepository.GetAllAsync();
        if (pos == null || !pos.Any())
            return Result.Failure<IEnumerable<PositionDTO>>("No positions found.");

        var posDTO = pos.Select(p => PositionMapper.ToDto(p));

        return Result.Success(posDTO);
    }
}

