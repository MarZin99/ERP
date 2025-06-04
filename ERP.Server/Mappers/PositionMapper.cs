

namespace ERP.Server.Mappers
{
    public static class PositionMapper
    {
        public static PositionDTO ToDto(Position position)
        {
            if (position == null) return null!;

            return new PositionDTO
            {
                Id = position.Id,
                Title = position.Title,
                BaseSalary = position.BaseSalary,
            };
        }
    }
}
