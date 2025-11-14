using recback.Localization;
using Volo.Abp.AspNetCore.Mvc;

namespace recback;

public abstract class recbackController : AbpControllerBase
{
    protected recbackController()
    {
        LocalizationResource = typeof(recbackResource);
    }
}
