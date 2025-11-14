using Volo.Abp.Modularity;
using Volo.Abp.VirtualFileSystem;

namespace recback;

[DependsOn(
    typeof(AbpVirtualFileSystemModule)
    )]
public class recbackInstallerModule : AbpModule
{
    public override void ConfigureServices(ServiceConfigurationContext context)
    {
        Configure<AbpVirtualFileSystemOptions>(options =>
        {
            options.FileSets.AddEmbedded<recbackInstallerModule>();
        });
    }
}
