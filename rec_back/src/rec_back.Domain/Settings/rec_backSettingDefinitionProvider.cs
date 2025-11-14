using Volo.Abp.Settings;

namespace rec_back.Settings;

public class rec_backSettingDefinitionProvider : SettingDefinitionProvider
{
    public override void Define(ISettingDefinitionContext context)
    {
        //Define your own settings here. Example:
        //context.Add(new SettingDefinition(rec_backSettings.MySetting1));
    }
}
