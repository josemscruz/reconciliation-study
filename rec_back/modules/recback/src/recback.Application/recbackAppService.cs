using recback.Localization;
using Volo.Abp.Application.Services;

namespace recback;

public abstract class recbackAppService : ApplicationService
{
    protected recbackAppService()
    {
        LocalizationResource = typeof(recbackResource);
        ObjectMapperContext = typeof(recbackApplicationModule);
    }
}
