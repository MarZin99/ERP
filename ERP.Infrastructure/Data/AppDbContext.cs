using Microsoft.EntityFrameworkCore;

namespace ERP.Infrastructure.Persistence;

public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

    public DbSet<Employee> Employees { get; set; }
    public DbSet<Position> Positions { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        modelBuilder.Entity<Position>()
            .HasMany(p => p.Employees)
            .WithOne(e => e.Position)
            .HasForeignKey(e => e.PositionId);
    }
}