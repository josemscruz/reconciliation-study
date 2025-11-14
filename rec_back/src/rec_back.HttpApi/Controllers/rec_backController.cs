using rec_back.Localization;
using Volo.Abp.AspNetCore.Mvc;

namespace rec_back.Controllers;

/* Inherit your controllers from this class.
 */
public abstract class rec_backController : AbpControllerBase
{
    protected rec_backController()
    {
        LocalizationResource = typeof(rec_backResource);
    }
}
