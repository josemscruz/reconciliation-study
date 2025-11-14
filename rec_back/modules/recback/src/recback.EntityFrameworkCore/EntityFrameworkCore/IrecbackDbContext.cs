using Volo.Abp.Data;
using Volo.Abp.EntityFrameworkCore;

namespace recback.EntityFrameworkCore;

[ConnectionStringName(recbackDbProperties.ConnectionStringName)]
public interface IrecbackDbContext : IEfCoreDbContext
{
    /* Add DbSet for each Aggregate Root here. Example:
     * DbSet<Question> Questions { get; }
     */
}
