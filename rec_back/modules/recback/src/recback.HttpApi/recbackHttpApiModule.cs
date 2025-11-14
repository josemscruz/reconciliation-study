using Localization.Resources.AbpUi;
using recback.Localization;
using Volo.Abp.AspNetCore.Mvc;
using Volo.Abp.Localization;
using Volo.Abp.Modularity;
using Microsoft.Extensions.DependencyInjection;

namespace recback;

[DependsOn(
    typeof(recbackApplicationContractsModule),
    typeof(AbpAspNetCoreMvcModule))]
public class recbackHttpApiModule : AbpModule
{
    public override void PreConfigureServices(ServiceConfigurationContext context)
    {
        PreConfigure<IMvcBuilder>(mvcBuilder =>
        {
            mvcBuilder.AddApplicationPartIfNotExists(typeof(recbackHttpApiModule).Assembly);
        });
    }

    public override void ConfigureServices(ServiceConfigurationContext context)
    {
        Configure<AbpLocalizationOptions>(options =>
        {
            options.Resources
                .Get<recbackResource>()
                .AddBaseTypes(typeof(AbpUiResource));
        });
    }
}
