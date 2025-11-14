using Microsoft.Extensions.Localization;
using rec_back.Localization;
using Volo.Abp.DependencyInjection;
using Volo.Abp.Ui.Branding;

namespace rec_back;

[Dependency(ReplaceServices = true)]
public class rec_backBrandingProvider : DefaultBrandingProvider
{
    private IStringLocalizer<rec_backResource> _localizer;

    public rec_backBrandingProvider(IStringLocalizer<rec_backResource> localizer)
    {
        _localizer = localizer;
    }

    public override string AppName => _localizer["AppName"];
}
