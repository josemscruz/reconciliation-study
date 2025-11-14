using rec_back.Localization;
using Volo.Abp.Authorization.Permissions;
using Volo.Abp.Localization;
using Volo.Abp.MultiTenancy;

namespace rec_back.Permissions;

public class rec_backPermissionDefinitionProvider : PermissionDefinitionProvider
{
    public override void Define(IPermissionDefinitionContext context)
    {
        var myGroup = context.AddGroup(rec_backPermissions.GroupName);

        //Define your own permissions here. Example:
        //myGroup.AddPermission(rec_backPermissions.MyPermission1, L("Permission:MyPermission1"));
    }

    private static LocalizableString L(string name)
    {
        return LocalizableString.Create<rec_backResource>(name);
    }
}
