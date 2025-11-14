using recback.Localization;
using Volo.Abp.Authorization.Permissions;
using Volo.Abp.Localization;

namespace recback.Permissions;

public class recbackPermissionDefinitionProvider : PermissionDefinitionProvider
{
    public override void Define(IPermissionDefinitionContext context)
    {
        var myGroup = context.AddGroup(recbackPermissions.GroupName, L("Permission:recback"));
    }

    private static LocalizableString L(string name)
    {
        return LocalizableString.Create<recbackResource>(name);
    }
}
