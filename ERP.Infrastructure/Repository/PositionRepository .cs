using ERP.API.IRepository;
using ERP.Infrastructure.Persistence;
using Microsoft.EntityFrameworkCore;

public class PositionRepository : IPositionRepository
{
    private readonly AppDbContext _context;

    public PositionRepository(AppDbContext context)
    {
        _context = context;
    }

    public async Task<IEnumerable<Position>> GetAllAsync()
    {
        return await _context.Positions.ToListAsync();
    }
}
