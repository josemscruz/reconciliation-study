using Microsoft.Extensions.DependencyInjection;
using Volo.Abp.EntityFrameworkCore;
using Volo.Abp.Modularity;

namespace recback.EntityFrameworkCore;

[DependsOn(
    typeof(recbackDomainModule),
    typeof(AbpEntityFrameworkCoreModule)
)]
public class recbackEntityFrameworkCoreModule : AbpModule
{
    public override void ConfigureServices(ServiceConfigurationContext context)
    {
        context.Services.AddAbpDbContext<recbackDbContext>(options =>
        {
            options.AddDefaultRepositories<IrecbackDbContext>(includeAllEntities: true);
            
            /* Add custom repositories here. Example:
            * options.AddRepository<Question, EfCoreQuestionRepository>();
            */
        });
    }
}
