using Microsoft.EntityFrameworkCore;
using Volo.Abp.Data;
using Volo.Abp.EntityFrameworkCore;

namespace recback.EntityFrameworkCore;

[ConnectionStringName(recbackDbProperties.ConnectionStringName)]
public class recbackDbContext : AbpDbContext<recbackDbContext>, IrecbackDbContext
{
    /* Add DbSet for each Aggregate Root here. Example:
     * public DbSet<Question> Questions { get; set; }
     */

    public recbackDbContext(DbContextOptions<recbackDbContext> options)
        : base(options)
    {

    }

    protected override void OnModelCreating(ModelBuilder builder)
    {
        base.OnModelCreating(builder);

        builder.Configurerecback();
    }
}
