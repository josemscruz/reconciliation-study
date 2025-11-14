using rec_back.EntityFrameworkCore;
using Volo.Abp.Autofac;
using Volo.Abp.Modularity;

namespace rec_back.DbMigrator;

[DependsOn(
    typeof(AbpAutofacModule),
    typeof(rec_backEntityFrameworkCoreModule),
    typeof(rec_backApplicationContractsModule)
)]
public class rec_backDbMigratorModule : AbpModule
{
}
