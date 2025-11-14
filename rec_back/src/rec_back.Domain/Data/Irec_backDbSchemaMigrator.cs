using System.Threading.Tasks;

namespace rec_back.Data;

public interface Irec_backDbSchemaMigrator
{
    Task MigrateAsync();
}
