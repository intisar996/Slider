using Microsoft.EntityFrameworkCore.Storage;
using Microsoft.EntityFrameworkCore;
using Project1.Models;
using Microsoft.EntityFrameworkCore.Infrastructure;

namespace Project1
{
    public class FishDbContext : DbContext
    {
        public DbSet<DailyFish> DailyFishs { get; set; }

        public FishDbContext(DbContextOptions<FishDbContext> dbContextOptions) : base(dbContextOptions)
        {
            try
            {
                var databaseCreator = Database.GetService<IDatabaseCreator>() as RelationalDatabaseCreator;
                if (databaseCreator != null)
                {
                    // Create Database if cannot connect
                    if (!databaseCreator.CanConnect()) databaseCreator.Create();

                    // Create Tables if no tables exist
                    if (!databaseCreator.HasTables()) databaseCreator.CreateTables();

                }
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
            }

        }
    }
}
