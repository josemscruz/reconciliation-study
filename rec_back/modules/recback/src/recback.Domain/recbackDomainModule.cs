using Volo.Abp.Domain;
using Volo.Abp.Modularity;

namespace recback;

[DependsOn(
    typeof(AbpDddDomainModule),
    typeof(recbackDomainSharedModule)
)]
public class recbackDomainModule : AbpModule
{

}
