using System.Threading.Tasks;
using Volo.Abp.DependencyInjection;

namespace rec_back.Data;

/* This is used if database provider does't define
 * Irec_backDbSchemaMigrator implementation.
 */
public class Nullrec_backDbSchemaMigrator : Irec_backDbSchemaMigrator, ITransientDependency
{
    public Task MigrateAsync()
    {
        return Task.CompletedTask;
    }
}
