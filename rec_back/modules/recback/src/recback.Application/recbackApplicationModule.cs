using Microsoft.Extensions.DependencyInjection;
using Volo.Abp.AutoMapper;
using Volo.Abp.Modularity;
using Volo.Abp.Application;

namespace recback;

[DependsOn(
    typeof(recbackDomainModule),
    typeof(recbackApplicationContractsModule),
    typeof(AbpDddApplicationModule),
    typeof(AbpAutoMapperModule)
    )]
public class recbackApplicationModule : AbpModule
{
    public override void ConfigureServices(ServiceConfigurationContext context)
    {
        context.Services.AddAutoMapperObjectMapper<recbackApplicationModule>();
        Configure<AbpAutoMapperOptions>(options =>
        {
            options.AddMaps<recbackApplicationModule>(validate: true);
        });
    }
}
