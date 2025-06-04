using ERP.Server.IRepository;
using ERP.Server.Mappers;

public class PositionRepository : IPositionRepository
{
    private readonly AppDbContext _context;

    public PositionRepository(AppDbContext context)
    {
        _context = context;
    }

    public async Task<IEnumerable<PositionDTO>> GetAllAsync()
    {
        return _context.Positions.Select(e => PositionMapper.ToDto(e));    
    }
}
