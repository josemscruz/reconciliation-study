using Microsoft.Extensions.DependencyInjection;
using Volo.Abp.Http.Client;
using Volo.Abp.Modularity;
using Volo.Abp.VirtualFileSystem;

namespace recback;

[DependsOn(
    typeof(recbackApplicationContractsModule),
    typeof(AbpHttpClientModule))]
public class recbackHttpApiClientModule : AbpModule
{
    public override void ConfigureServices(ServiceConfigurationContext context)
    {
        context.Services.AddHttpClientProxies(
            typeof(recbackApplicationContractsModule).Assembly,
            recbackRemoteServiceConsts.RemoteServiceName
        );

        Configure<AbpVirtualFileSystemOptions>(options =>
        {
            options.FileSets.AddEmbedded<recbackHttpApiClientModule>();
        });

    }
}
