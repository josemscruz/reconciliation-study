using rec_back.Localization;
using Volo.Abp.Application.Services;

namespace rec_back;

/* Inherit your application services from this class.
 */
public abstract class rec_backAppService : ApplicationService
{
    protected rec_backAppService()
    {
        LocalizationResource = typeof(rec_backResource);
    }
}
